import { waffle, ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import * as NetworkRegistryJson from "../artifacts/contracts/NetworkRegistry.sol/NetworkRegistry.json";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { NetworkRegistry } from "../types/NetworkRegistry";

chai.use(solidity);

describe("Network Registry Tests", function () {
  let deployer: SignerWithAddress;
  let memberA: SignerWithAddress;
  let memberB: SignerWithAddress;
  let memberC: SignerWithAddress;
  let memberD: SignerWithAddress;
  let operatorA: SignerWithAddress;
  let operatorB: SignerWithAddress;
  let networkRegistry: NetworkRegistry;

  before(async function () {
    const accounts = await ethers.getSigners();
    deployer = accounts[0];
    memberA = accounts[1];
    memberB = accounts[2];
    memberC = accounts[3];
    memberD = accounts[4];
    operatorA = accounts[5];
    operatorB = accounts[6];
  });

  it("Successfully deploys a NetworkRegistry", async function () {
    networkRegistry = (await waffle.deployContract(deployer, NetworkRegistryJson, [
      [memberA.address, memberB.address],
      [operatorA.address],
    ])) as NetworkRegistry;

    expect(networkRegistry.address).to.properAddress;
    const members = await networkRegistry.getMembers();
    const operators = await networkRegistry.getOperators();
    expect(members).to.contain(memberA.address);
    expect(members).to.contain(memberB.address);
    expect(operators).to.contain(operatorA.address);
    await expect(await networkRegistry.isMember(memberA.address)).to.be.true;
    await expect(await networkRegistry.isMember(memberB.address)).to.be.true;
    await expect(await networkRegistry.isOperator(operatorA.address)).to.be.true;
  });

  it("Unsuccessfully add memberC by deployer", async () => {
    await expect(networkRegistry.connect(deployer).addMember(memberC.address)).to.be.reverted;
  });

  it("Successfully add memberC by operatorA", async () => {
    await expect(await networkRegistry.connect(operatorA).addMember(memberC.address)).to.emit(
      networkRegistry,
      "MemberAddition",
    );
    const members = await networkRegistry.getMembers();
    expect(members).to.include(memberC.address);
    await expect(await networkRegistry.isMember(memberC.address)).to.be.true;
    await expect(await networkRegistry.isMember(memberD.address)).to.be.false;
  });

  it("Unsuccessfully add operatorB by deployer", async () => {
    await expect(networkRegistry.connect(deployer).addOperator(operatorB.address)).to.be.reverted;
  });

  it("Successfully add operatorB by operatorA", async () => {
    await expect(await networkRegistry.connect(operatorA).addOperator(operatorB.address)).to.emit(
      networkRegistry,
      "OperatorAddition",
    );
    const operators = await networkRegistry.getOperators();
    expect(operators).to.contain(operatorB.address);
    await expect(await networkRegistry.isOperator(operatorB.address)).to.be.true;
  });

  it("Successfully add memberD by operatorB", async () => {
    await expect(await networkRegistry.connect(operatorA).addMember(memberD.address)).to.emit(
      networkRegistry,
      "MemberAddition",
    );
    const members = await networkRegistry.getMembers();
    expect(members).to.include(memberD.address);
    await expect(await networkRegistry.isMember(memberD.address)).to.be.true;
  });
});
