import { waffle, ethers, upgrades } from "hardhat";
import * as MultiSigWallet from "../artifacts/contracts/MultiSigWalletWithRelay.sol/MultiSigWallet.json";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Contract } from "ethers";
import { expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);

describe("ERC20 x MultiSig Tests", function () {
  let coSigner: SignerWithAddress; // co-signs transactions
  let multiSigOwner: SignerWithAddress; // user who own's the multiSig
  let signerB: SignerWithAddress;
  let signerC: SignerWithAddress;
  let multiSigWallet: Contract;
  let muTokenContract: Contract;

  before(async function () {
    const accounts = await ethers.getSigners();
    coSigner = accounts[1];
    multiSigOwner = accounts[2];
    signerB = accounts[3];
    signerC = accounts[4];
  });

  it("Successfully deploys Mutuality token contract", async function () {
    const MutualityTokenFactory = await ethers.getContractFactory("MutualityToken");

    muTokenContract = await upgrades.deployProxy(MutualityTokenFactory, [ethers.utils.parseEther("1000000")]);

    await muTokenContract.deployed();
    expect(muTokenContract.address).to.properAddress;
  });

  it("Successfully deploys a multiSig wallet contract", async function () {
    multiSigWallet = await waffle.deployContract(coSigner, MultiSigWallet, [
      [coSigner.address, multiSigOwner.address],
      2,
    ]);
    expect(multiSigWallet.address).to.properAddress;
  });

  it("Successfully sends 1000 mu to multiSig", async function () {
    await (await muTokenContract.transfer(multiSigWallet.address, ethers.utils.parseEther("1000.0"))).wait();
    expect(await muTokenContract.balanceOf(multiSigWallet.address)).to.equal(ethers.utils.parseEther("1000.0"));
  });

  it("MultiSigWallet Successfully sends wallet B 900 rUSD", async () => {
    const amount = ethers.utils.parseEther("900.0");

    // populate transfer transaction using multiSig owner wallet
    const data = (await muTokenContract.connect(multiSigOwner).populateTransaction.transfer(signerB.address, amount))
      .data;

    // get multiSig owner tx nonce
    const multiSigOwnerNonce = await multiSigWallet.nonces(multiSigOwner.address);

    // generate prepare submit transaction hash for signature by multiSigOwner
    const multiSigOwnerHashToSign = ethers.utils.arrayify(
      await multiSigWallet
        .connect(multiSigOwner)
        .prepareSubmitTransaction(muTokenContract.address, 0, data, multiSigOwnerNonce),
    );

    // generate multiSigOwner signature
    const multiSigOwnerSig = ethers.utils.joinSignature(await multiSigOwner.signMessage(multiSigOwnerHashToSign));

    const submissionResult = await (
      await multiSigWallet.submitTransactionByRelay(
        muTokenContract.address,
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

  it("MultiSigWallet has a new balance of 900.0", async () => {
    await expect(ethers.utils.formatEther(await muTokenContract.balanceOf(multiSigWallet.address))).to.equal("100.0");
  });

  it("MultiSigWallet Successfully sends wallet C 50 rUSD", async () => {
    const amount = ethers.utils.parseEther("50.0");

    // populate transfer transaction using multiSig owner wallet
    const data = (await muTokenContract.connect(multiSigOwner).populateTransaction.transfer(signerC.address, amount))
      .data;

    // get multiSig owner tx nonce
    const multiSigOwnerNonce = await multiSigWallet.nonces(multiSigOwner.address);

    // generate prepare submit transaction hash for signature by multiSigOwner
    const multiSigOwnerHashToSign = ethers.utils.arrayify(
      await multiSigWallet
        .connect(multiSigOwner)
        .prepareSubmitTransaction(muTokenContract.address, 0, data, multiSigOwnerNonce),
    );

    // generate multiSigOwner signature
    const multiSigOwnerSig = ethers.utils.joinSignature(await multiSigOwner.signMessage(multiSigOwnerHashToSign));

    const submissionResult = await (
      await multiSigWallet.submitTransactionByRelay(
        muTokenContract.address,
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

  it("MultiSigWallet has a new balance of 950.0", async () => {
    await expect(ethers.utils.formatEther(await muTokenContract.balanceOf(multiSigWallet.address))).to.equal("50.0");
  });

  it("multiSigWallet fails to sends wallet B an additioanl 51 rUSD", async () => {
    const amount = ethers.utils.parseEther("51.0");

    const data = (await muTokenContract.connect(multiSigOwner).populateTransaction.transfer(signerB.address, amount))
      .data;

    const nonce = await multiSigWallet.nonces(multiSigWallet.address);

    const hashToSign = ethers.utils.arrayify(
      await multiSigWallet.connect(multiSigOwner).prepareSubmitTransaction(muTokenContract.address, 0, data, nonce),
    );

    const sig = ethers.utils.joinSignature(await multiSigOwner.signMessage(hashToSign));

    await expect(multiSigWallet.submitTransactionByRelay(muTokenContract.address, 0, data, sig, multiSigOwner.address))
      .to.be.reverted;
  });

  it("Wallet B Successfully sends wallet C 200 rUSD", async () => {
    await expect(muTokenContract.connect(signerB).transfer(signerC.address, ethers.utils.parseEther("200.0"))).to.emit(
      muTokenContract,
      "Transfer",
    );
  });
});
