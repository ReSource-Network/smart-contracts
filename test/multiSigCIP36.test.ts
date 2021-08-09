import { waffle, ethers, upgrades } from "hardhat";
import * as MultiSigWallet from "../artifacts/contracts/MultiSigWalletWithRelay.sol/MultiSigWallet.json";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Contract } from "ethers";
import { expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { CIP36 } from "../types/CIP36";
chai.use(solidity);

describe("CIP36 x MultiSig Tests", () => {
  let operator: SignerWithAddress; // pays for transactions and deployments
  let coSigner: SignerWithAddress; // co-signs transactions
  let multiSigOwner: SignerWithAddress; // user who own's the multiSig
  let signerB: SignerWithAddress;
  let signerC: SignerWithAddress;
  let multiSigWallet: Contract;
  let CIP36Contract: CIP36;

  before(async () => {
    const accounts = await ethers.getSigners();
    operator = accounts[0];
    coSigner = accounts[1];
    multiSigOwner = accounts[2];
    signerB = accounts[3];
    signerC = accounts[4];
  });

  it("Successfully deploys CIP36 contract", async () => {
    const CIP36Factory = await ethers.getContractFactory("CIP36");
    CIP36Contract = (await upgrades.deployProxy(CIP36Factory, ["RUSD", "RUSD"])) as CIP36;
    expect(CIP36Contract.address).to.properAddress;
  });

  it("Successfully deploys a multiSig wallet contract", async () => {
    multiSigWallet = await waffle.deployContract(coSigner, MultiSigWallet, [
      [coSigner.address, multiSigOwner.address],
      2,
    ]);
    expect(multiSigWallet.address).to.properAddress;
  });

  it("Successfully assigns multiSigWallet a credit limit of 1000", async () => {
    await expect(
      CIP36Contract.setCreditLimit(multiSigWallet.address, ethers.utils.parseUnits("1000.0", "mwei")),
    ).to.emit(CIP36Contract, "CreditLimitUpdate");

    await expect(ethers.utils.formatUnits(await CIP36Contract.creditLimitOf(multiSigWallet.address), "mwei")).to.equal(
      "1000.0",
    );
  });

  it("MultiSigWallet Successfully sends wallet B 900 rUSD", async () => {
    const amount = ethers.utils.parseUnits("900.0", "mwei");

    // populate transfer transaction using multiSig owner wallet
    const data = (await CIP36Contract.connect(multiSigOwner).populateTransaction.transfer(signerB.address, amount))
      .data;

    // get multiSig owner tx nonce
    const multiSigOwnerNonce = await multiSigWallet.nonces(multiSigOwner.address);

    // generate prepare submit transaction hash for signature by multiSigOwner
    const multiSigOwnerHashToSign = ethers.utils.arrayify(
      await multiSigWallet
        .connect(multiSigOwner)
        .prepareSubmitTransaction(CIP36Contract.address, 0, data, multiSigOwnerNonce),
    );

    // generate multiSigOwner signature
    const multiSigOwnerSig = ethers.utils.joinSignature(await multiSigOwner.signMessage(multiSigOwnerHashToSign));

    const submissionResult = await (
      await multiSigWallet.submitTransactionByRelay(
        CIP36Contract.address,
        0,
        data,
        multiSigOwnerSig,
        multiSigOwner.address,
      )
    ).wait();

    const transactionId = submissionResult.events.find((e: any) => e.eventSignature == "Submission(uint256)").args
      .transactionId;

    expect(transactionId).to.equal(0);

    // get nonce of coSigner
    const coSignerNonce = await multiSigWallet.nonces(coSigner.address);

    // generate prepare confirm transaction hash for signature by coSigner
    const coSignerHashToSign = ethers.utils.arrayify(
      await multiSigWallet.connect(coSigner).prepareConfirmTransaction(transactionId, coSignerNonce),
    );

    // generate coSigner signature
    const coSignerSig = ethers.utils.joinSignature(await coSigner.signMessage(coSignerHashToSign));

    // 3. confirmTransactionByRelay using operator wallet
    await expect(multiSigWallet.confirmTransactionByRelay(transactionId, coSignerSig, coSigner.address)).to.emit(
      multiSigWallet,
      "Execution",
    );
  });

  it("MultiSigWallet has a new credit balance of 900.0", async () => {
    await expect(
      ethers.utils.formatUnits(await CIP36Contract.creditBalanceOf(multiSigWallet.address), "mwei"),
    ).to.equal("900.0");
  });
  it("MultiSigWallet Successfully sends wallet C 50 rUSD", async () => {
    const amount = ethers.utils.parseUnits("50.0", "mwei");

    // populate transfer transaction using multiSig owner wallet
    const data = (await CIP36Contract.connect(multiSigOwner).populateTransaction.transfer(signerC.address, amount))
      .data;

    // get multiSig owner tx nonce
    const multiSigOwnerNonce = await multiSigWallet.nonces(multiSigOwner.address);

    // generate prepare submit transaction hash for signature by multiSigOwner
    const multiSigOwnerHashToSign = ethers.utils.arrayify(
      await multiSigWallet
        .connect(multiSigOwner)
        .prepareSubmitTransaction(CIP36Contract.address, 0, data, multiSigOwnerNonce),
    );

    // generate multiSigOwner signature
    const multiSigOwnerSig = ethers.utils.joinSignature(await multiSigOwner.signMessage(multiSigOwnerHashToSign));

    const submissionResult = await (
      await multiSigWallet.submitTransactionByRelay(
        CIP36Contract.address,
        0,
        data,
        multiSigOwnerSig,
        multiSigOwner.address,
      )
    ).wait();

    const transactionId = submissionResult.events.find((e: any) => e.eventSignature == "Submission(uint256)").args
      .transactionId;

    // get nonce of coSigner
    const coSignerNonce = await multiSigWallet.nonces(coSigner.address);

    // generate prepare confirm transaction hash for signature by coSigner
    const coSignerHashToSign = ethers.utils.arrayify(
      await multiSigWallet.connect(coSigner).prepareConfirmTransaction(transactionId, coSignerNonce),
    );

    // generate coSigner signature
    const coSignerSig = ethers.utils.joinSignature(await coSigner.signMessage(coSignerHashToSign));

    // 3. confirmTransactionByRelay using operator wallet
    await expect(multiSigWallet.confirmTransactionByRelay(transactionId, coSignerSig, coSigner.address)).to.emit(
      multiSigWallet,
      "Execution",
    );
  });

  it("MultiSigWallet has a new credit balance of 950.0", async () => {
    await expect(
      ethers.utils.formatUnits(await CIP36Contract.creditBalanceOf(multiSigWallet.address), "mwei"),
    ).to.equal("950.0");
  });

  it("multiSigWallet fails to sends wallet B an additioanl 51 rUSD", async () => {
    const amount = ethers.utils.parseUnits("51.0", "mwei");

    const data = (await CIP36Contract.connect(multiSigOwner).populateTransaction.transfer(signerB.address, amount))
      .data;

    const nonce = await multiSigWallet.nonces(multiSigWallet.address);

    const hashToSign = ethers.utils.arrayify(
      await multiSigWallet.connect(multiSigOwner).prepareSubmitTransaction(CIP36Contract.address, 0, data, nonce),
    );

    const sig = ethers.utils.joinSignature(await multiSigOwner.signMessage(hashToSign));

    await expect(multiSigWallet.submitTransactionByRelay(CIP36Contract.address, 0, data, sig, multiSigOwner.address)).to
      .be.reverted;
  });

  it("Wallet B Successfully sends wallet C 200 rUSD", async () => {
    await expect(
      CIP36Contract.connect(signerB).transfer(signerC.address, ethers.utils.parseUnits("200.0", "mwei")),
    ).to.emit(CIP36Contract, "Transfer");
  });
});
