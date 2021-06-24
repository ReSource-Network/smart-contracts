import { waffle, ethers, upgrades } from "hardhat";
import * as CIP36Artifact from "../artifacts/contracts/CIP36.sol/CIP36.json";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Contract } from "ethers";
import { expect } from "chai";

describe("CIP36 Tests", function () {
  let deployer: SignerWithAddress;
  let signerA: SignerWithAddress;
  let signerB: SignerWithAddress;
  let signerC: SignerWithAddress;

  let CIP36Contract: Contract;

  before(async function () {
    const accounts = await ethers.getSigners();
    deployer = accounts[0];
    signerA = accounts[1];
    signerB = accounts[2];
    signerC = accounts[3];
  });

  it("Successfully deploys CIP36 contract", async function () {
    CIP36Contract = await waffle.deployContract(deployer, CIP36Artifact);
    expect(CIP36Contract.address).to.properAddress;
  });

  it("Successfully assigns wallet A a credit limit of 1000", async function () {
    await expect(CIP36Contract.setCreditLimit(signerA.address, ethers.utils.parseEther("1000.0"))).to.emit(
      CIP36Contract,
      "CreditLimitUpdate",
    );
  });

  it("Wallet A Successfully sends wallet B 900 rUSD", async function () {
    await expect(CIP36Contract.connect(signerA).transfer(signerB.address, ethers.utils.parseEther("900.0"))).to.emit(
      CIP36Contract,
      "Transfer",
    );
  });

  it("Wallet A Successfully sends wallet C 50 rUSD", async function () {
    await expect(CIP36Contract.connect(signerA).transfer(signerC.address, ethers.utils.parseEther("50.0"))).to.emit(
      CIP36Contract,
      "Transfer",
    );
  });

  it("Wallet A fails to sends wallet B an additioanl 51 rUSD", async function () {
    await expect(CIP36Contract.connect(signerA).transfer(signerB.address, ethers.utils.parseEther("51.0"))).to.be
      .reverted;
  });

  it("Wallet B Successfully sends wallet C 200 rUSD", async function () {
    await expect(CIP36Contract.connect(signerB).transfer(signerC.address, ethers.utils.parseEther("200.0"))).to.emit(
      CIP36Contract,
      "Transfer",
    );
  });
});
