import { waffle, ethers, upgrades } from "hardhat";
import * as MultiSigWallet from "../artifacts/contracts/MultiSigWalletWithRelay.sol/MultiSigWallet.json";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Contract } from "ethers";
import { expect } from "chai";

describe("ERC20 x MultiSig Tests", function () {
  let operatorSigner: SignerWithAddress;
  let clientSigner: SignerWithAddress;
  let receiverAddress: string;
  let multiSigContract: Contract;
  let muTokenContract: Contract;
  let transactionIndex: number;

  before(async function () {
    const accounts = await ethers.getSigners();
    operatorSigner = accounts[0];
    clientSigner = accounts[1];
    receiverAddress = accounts[2].address;
  });

  it("Successfuly deploys Mutuality token contract", async function () {
    const MutualityTokenFactory = await ethers.getContractFactory("MutualityToken");

    muTokenContract = await upgrades.deployProxy(MutualityTokenFactory, [ethers.utils.parseEther("1000000")]);

    await muTokenContract.deployed();
    expect(muTokenContract.address).to.properAddress;
  });

  it("Successfuly deploys a multiSig wallet contract", async function () {
    multiSigContract = await waffle.deployContract(operatorSigner, MultiSigWallet, [
      [operatorSigner.address, clientSigner.address],
      2,
    ]);
    expect(multiSigContract.address).to.properAddress;
  });

  it("Successfuly sends 100 mu to multiSig", async function () {
    await (await muTokenContract.transfer(multiSigContract.address, ethers.utils.parseEther("10.0"))).wait();
    expect(await muTokenContract.balanceOf(multiSigContract.address)).to.equal(ethers.utils.parseEther("10.0"));
  });

  it("Successfuly submits 'send 1 mu' transaction by relayer", async function () {
    const amount = ethers.utils.parseEther("1.0");

    const data = (await muTokenContract.connect(clientSigner).populateTransaction.transfer(receiverAddress, amount))
      .data;

    const nonce = await multiSigContract.nonces(clientSigner.address);

    const hashToSign = ethers.utils.arrayify(
      await multiSigContract.connect(clientSigner).prepareSubmitTransaction(muTokenContract.address, 0, data, nonce),
    );

    const sig = ethers.utils.joinSignature(await clientSigner.signMessage(hashToSign));

    const submissionResult = await multiSigContract.submitTransactionByRelay(
      muTokenContract.address,
      0,
      data,
      sig,
      clientSigner.address,
    );

    const multiSigSendResult = await submissionResult.wait();
    transactionIndex = multiSigSendResult.transactionIndex;
    expect(transactionIndex).to.equal(0);
  });

  it("Successfuly confirms transaction by operator", async function () {
    await expect(multiSigContract.confirmTransaction(transactionIndex, operatorSigner.address)).to.emit(
      multiSigContract,
      "Execution",
    );

    expect(await muTokenContract.balanceOf(multiSigContract.address)).to.equal(ethers.utils.parseEther("9.0"));
    expect(await muTokenContract.balanceOf(receiverAddress)).to.equal(ethers.utils.parseEther("1.0"));
  });
});
