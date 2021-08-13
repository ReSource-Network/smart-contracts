import { ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { RUSD } from "../types/RUSD";
import { NetworkRegistry } from "../types/NetworkRegistry";
import { MutualityToken } from "../types/MutualityToken";
import { UnderwriteManager } from "../types/UnderwriteManager";
import { UnderwriteManager__factory } from "../types/factories/UnderwriteManager__factory";
chai.use(solidity);

describe("UnderwriteManager Tests", function () {
  let deployer: SignerWithAddress;
  let memberA: SignerWithAddress;
  let memberB: SignerWithAddress;
  let memberC: SignerWithAddress;
  let operatorA: SignerWithAddress;
  let underwriterA: SignerWithAddress;
  let underwriterB: SignerWithAddress;
  let rUSD: RUSD;
  let mutualityToken: MutualityToken;
  let networkRegistry: NetworkRegistry;
  let underwriteManager: UnderwriteManager;

  before(async function () {
    const accounts = await ethers.getSigners();
    deployer = accounts[0];
    memberA = accounts[1];
    memberB = accounts[2];
    memberC = accounts[3];
    underwriterA = accounts[4];
    underwriterB = accounts[5];
    operatorA = accounts[6];
  });

  it("Successfully deploys a RUSD contract", async function () {
    const networkRegistryFactory = await ethers.getContractFactory("NetworkRegistry");

    networkRegistry = (await upgrades.deployProxy(networkRegistryFactory, [
      [memberA.address, memberB.address, memberC.address],
      [operatorA.address],
    ])) as NetworkRegistry;

    const mutualityTokenFactory = await ethers.getContractFactory("MutualityToken");

    mutualityToken = (await upgrades.deployProxy(mutualityTokenFactory, [
      ethers.utils.parseEther("10000000"),
    ])) as MutualityToken;

    const rUSDFactory = await ethers.getContractFactory("RUSD");

    rUSD = (await upgrades.deployProxy(rUSDFactory, [networkRegistry.address, mutualityToken.address, 7], {
      initializer: "initializeRUSD",
    })) as RUSD;

    const registryAddress = await rUSD.registry();
    const restrictionState = await rUSD.restrictionState();

    const underwriteManagerAddress = await rUSD.underwriteManager();
    underwriteManager = UnderwriteManager__factory.connect(underwriteManagerAddress, deployer) as UnderwriteManager;

    expect(restrictionState).to.equal(0);
    expect(rUSD.address).to.properAddress;
    expect(registryAddress).to.properAddress;
    expect(underwriteManagerAddress).to.properAddress;
  });

  it("Send 100,000 mu to underwriterA", async function () {
    await expect(mutualityToken.transfer(underwriterA.address, ethers.utils.parseEther("100000"))).to.emit(
      mutualityToken,
      "Transfer",
    );

    expect(ethers.utils.formatEther(await mutualityToken.balanceOf(underwriterA.address))).to.equal("100000.0");
  });

  it("underwriterA approves underwriteManager", async function () {
    await expect(
      mutualityToken
        .connect(underwriterA)
        .approve(
          underwriteManager.address,
          ethers.BigNumber.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
        ),
    ).to.not.be.reverted;
  });

  it("Underwrite 10,000 mu from underwriterA for memberA", async function () {
    await expect(
      underwriteManager.connect(underwriterA).underwrite(ethers.utils.parseEther("10000"), memberA.address),
    ).to.emit(underwriteManager, "Underwrite");

    expect(
      ethers.utils.formatEther(await underwriteManager.underwriterCollateral(underwriterA.address, memberA.address)),
    ).to.equal("10000.0");

    expect(ethers.utils.formatEther(await mutualityToken.balanceOf(underwriterA.address))).to.equal("90000.0");
  });
});
