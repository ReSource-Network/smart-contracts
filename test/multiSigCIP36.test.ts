import { waffle, ethers, upgrades } from "hardhat";
import * as MultiSigWallet from "../artifacts/contracts/MultiSigWalletWithRelay.sol/MultiSigWallet.json";
import * as CIP36Artifact from "../artifacts/contracts/CIP36.sol/CIP36.json";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Contract } from "ethers";
import { expect } from "chai";

describe("CIP36 x MultiSig Tests", () => {
  let deployer: SignerWithAddress;
  let signerA: SignerWithAddress;
  let signerB: SignerWithAddress;
  let signerC: SignerWithAddress;
  let multiSigWallet: Contract;
  let CIP36Contract: Contract;

  before(async () => {
    const accounts = await ethers.getSigners();
    deployer = accounts[0];
    signerA = accounts[1];
    signerB = accounts[2];
    signerC = accounts[3];
  });

  it("Successfuly deploys CIP36 contract", async () => {
    CIP36Contract = await waffle.deployContract(deployer, CIP36Artifact);
    expect(CIP36Contract.address).to.properAddress;
  });

  it("Successfuly deploys a multiSig wallet contract", async () => {
    multiSigWallet = await waffle.deployContract(deployer, MultiSigWallet, [[deployer.address, signerA.address], 2]);
    expect(multiSigWallet.address).to.properAddress;
  });

  it("Successfuly assigns multiSigWallet a credit limit of 1000", async () => {
    await expect(CIP36Contract.setCreditLimit(multiSigWallet.address, ethers.utils.parseEther("1000.0"))).to.emit(
      CIP36Contract,
      "CreditLimitUpdate",
    );

    await expect(ethers.utils.formatEther(await CIP36Contract.creditLimitOf(multiSigWallet.address))).to.equal(
      "1000.0",
    );
  });

  it("MultiSigWallet Successfuly sends wallet B 900 rUSD", async () => {
    const amount = ethers.utils.parseEther("900.0");

    const data = (await CIP36Contract.connect(signerA).populateTransaction.transfer(signerB.address, amount)).data;

    const nonce = await multiSigWallet.nonces(multiSigWallet.address);

    const hashToSign = ethers.utils.arrayify(
      await multiSigWallet.connect(signerA).prepareSubmitTransaction(CIP36Contract.address, 0, data, nonce),
    );

    const sig = ethers.utils.joinSignature(await signerA.signMessage(hashToSign));

    const submissionResult = await (
      await multiSigWallet.submitTransactionByRelay(CIP36Contract.address, 0, data, sig, signerA.address)
    ).wait();

    expect(submissionResult.transactionIndex).to.equal(0);

    await expect(multiSigWallet.confirmTransaction(submissionResult.transactionIndex, deployer.address)).to.emit(
      multiSigWallet,
      "Execution",
    );
  });

  it("MultiSigWallet has a new credit balance of 900.0", async () => {
    await expect(ethers.utils.formatEther(await CIP36Contract.creditBalanceOf(multiSigWallet.address))).to.equal(
      "900.0",
    );
  });

  it("multiSigWallet fails to sends wallet B an additioanl 101 rUSD", async () => {
    const amount = ethers.utils.parseEther("101.0");

    const data = (await CIP36Contract.connect(signerA).populateTransaction.transfer(signerB.address, amount)).data;

    const nonce = await multiSigWallet.nonces(multiSigWallet.address);

    const hashToSign = ethers.utils.arrayify(
      await multiSigWallet.connect(signerA).prepareSubmitTransaction(CIP36Contract.address, 0, data, nonce),
    );

    const sig = ethers.utils.joinSignature(await signerA.signMessage(hashToSign));

    await expect(multiSigWallet.submitTransactionByRelay(CIP36Contract.address, 0, data, sig, signerA.address)).to.be
      .reverted;
  });

  it("Wallet B Successfuly sends wallet C 200 rUSD", async () => {
    await expect(CIP36Contract.connect(signerB).transfer(signerC.address, ethers.utils.parseEther("200.0"))).to.emit(
      CIP36Contract,
      "Transfer",
    );
  });
});
