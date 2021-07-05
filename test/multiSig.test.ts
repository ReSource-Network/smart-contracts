import { waffle, ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import { MultiSigWallet } from "../types/MultiSigWallet";
import * as MultiSigJson from "../artifacts/contracts/MultiSigWalletWithRelay.sol/MultiSigWallet.json";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);

describe("MultiSig Tests", function () {
  let coSigner: SignerWithAddress;
  let ownerA: SignerWithAddress;
  let ownerB: SignerWithAddress;
  let ownerC: SignerWithAddress;
  let multiSigWallet: MultiSigWallet;

  before(async function () {
    const accounts = await ethers.getSigners();
    coSigner = accounts[0];
    ownerA = accounts[1];
    ownerB = accounts[2];
    ownerC = accounts[3];
  });

  it("Successfully deploys a multiSig wallet contract with ownerA and ownerB", async function () {
    multiSigWallet = (await waffle.deployContract(coSigner, MultiSigJson, [
      [ownerA.address, ownerB.address],
      2,
    ])) as MultiSigWallet;
    expect(multiSigWallet.address).to.properAddress;
    const owners = await multiSigWallet.getOwners();
    expect(owners).to.contain(ownerA.address);
    expect(owners).to.contain(ownerB.address);
  });

  it("Successfully replaces ownerB with ownerC", async () => {
    // populate replaceOwner transaction using ownerA wallet
    const data = (await multiSigWallet.connect(ownerA).populateTransaction.replaceOwner(ownerB.address, ownerC.address))
      .data!;

    // get multiSig owner tx nonce
    const ownerANonce = await multiSigWallet.nonces(ownerA.address);

    // generate prepare submit transaction hash for signature by ownerA
    const ownerAHashToSign = ethers.utils.arrayify(
      await multiSigWallet.connect(ownerA).prepareSubmitTransaction(multiSigWallet.address, 0, data, ownerANonce),
    );

    // generate ownerA signature
    const ownerASig = ethers.utils.joinSignature(await ownerA.signMessage(ownerAHashToSign));

    const submissionResult = await (
      await multiSigWallet.submitTransactionByRelay(multiSigWallet.address, 0, data, ownerASig, ownerA.address)
    ).wait();

    const transactionId = submissionResult.events?.find((e: any) => e.eventSignature == "Submission(uint256)")?.args
      ?.transactionId;

    expect(transactionId).to.equal(0);

    // get nonce of ownerB
    const ownerBNonce = await multiSigWallet.nonces(ownerB.address);

    // generate prepare confirm transaction hash for signature by coSigner
    const ownerBHashToSign = ethers.utils.arrayify(
      await multiSigWallet.connect(ownerB).prepareConfirmTransaction(transactionId, ownerBNonce),
    );

    // generate coSigner signature
    const ownerBSig = ethers.utils.joinSignature(await ownerB.signMessage(ownerBHashToSign));

    // 3. confirmTransactionByRelay using ownerB wallet
    await expect(multiSigWallet.confirmTransactionByRelay(transactionId, ownerBSig, ownerB.address)).to.emit(
      multiSigWallet,
      "Execution",
    );

    const owners = await multiSigWallet.getOwners();
    expect(owners).to.contain(ownerA.address);
    expect(owners).to.contain(ownerC.address);
  });
});
