import { waffle, ethers, upgrades } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { expect } from "chai";
import chai from "chai";
import { solidity } from "ethereum-waffle";
import { RUSD } from "../types/RUSD";
import { NetworkRegistry } from "../types/NetworkRegistry";
chai.use(solidity);

const sleep = (milliseconds: number) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

describe("RUSD Tests", function () {
  let deployer: SignerWithAddress;
  let memberA: SignerWithAddress;
  let memberB: SignerWithAddress;
  let nonMemberA: SignerWithAddress;
  let nonMemberB: SignerWithAddress;
  let nonMemberC: SignerWithAddress;
  let operatorA: SignerWithAddress;
  let rUSD: RUSD;
  let networkRegistry: NetworkRegistry;

  before(async function () {
    const accounts = await ethers.getSigners();
    deployer = accounts[0];
    memberA = accounts[1];
    memberB = accounts[2];
    nonMemberA = accounts[3];
    nonMemberB = accounts[4];
    nonMemberC = accounts[5];
    operatorA = accounts[6];
  });

  it("Successfully deploys a RUSD contract", async function () {
    const networkRegistryFactory = await ethers.getContractFactory("NetworkRegistry");

    networkRegistry = (await upgrades.deployProxy(networkRegistryFactory, [
      [memberA.address, memberB.address],
      [operatorA.address],
    ])) as NetworkRegistry;

    const rUSDFactory = await ethers.getContractFactory("RUSD");

    // console.log(networkRegistry.address);

    rUSD = (await upgrades.deployProxy(rUSDFactory, [networkRegistry.address, 7], {
      initializer: "initializeRUSD",
    })) as RUSD;

    const registryAddress = await rUSD.registry();
    const restrictionState = await rUSD.restrictionState();
    expect(restrictionState).to.equal(0);
    expect(rUSD.address).to.properAddress;
    expect(registryAddress).to.properAddress;
  });

  it("RUSD in REGISTERED restriction state", async function () {
    await expect(rUSD.setCreditLimit(memberB.address, ethers.utils.parseUnits("1000.0", "mwei"))).to.emit(
      rUSD,
      "CreditLimitUpdate",
    );

    await expect(rUSD.connect(memberB).transfer(memberA.address, ethers.utils.parseUnits("100.0", "mwei"))).to.emit(
      rUSD,
      "Transfer",
    );

    await expect(rUSD.connect(memberB).transfer(nonMemberA.address, ethers.utils.parseUnits("20.0", "mwei"))).to.be
      .reverted;

    await expect(rUSD.connect(memberB).transfer(memberA.address, ethers.utils.parseUnits("20.0", "mwei"))).to.emit(
      rUSD,
      "Transfer",
    );
  });

  it("Updates RUSD to POSITIVE restriction state", async function () {
    await expect(rUSD.connect(memberA).restrictPositiveBalance()).to.be.reverted;

    await expect(rUSD.restrictPositiveBalance()).to.emit(rUSD, "RestrictionUpdated");

    const state = await rUSD.restrictionState();
    expect(state).to.equal(1);
  });

  it("RUSD in POSITIVE restriction state", async function () {
    await expect(rUSD.connect(memberA).transfer(nonMemberA.address, ethers.utils.parseUnits("100.0", "mwei"))).to.emit(
      rUSD,
      "Transfer",
    );

    await expect(rUSD.setCreditLimit(nonMemberB.address, ethers.utils.parseUnits("1000.0", "mwei"))).to.emit(
      rUSD,
      "CreditLimitUpdate",
    );

    await expect(rUSD.connect(nonMemberB).transfer(nonMemberC.address, ethers.utils.parseUnits("100.0", "mwei"))).to.be
      .reverted;

    await expect(
      rUSD.connect(nonMemberA).transfer(nonMemberC.address, ethers.utils.parseUnits("100.0", "mwei")),
    ).to.emit(rUSD, "Transfer");

    await expect(rUSD.connect(memberA).transfer(nonMemberA.address, ethers.utils.parseUnits("30.0", "mwei"))).to.be
      .reverted;
  });

  it("Unsuccessfully update RUSD to NONE restriction state", async function () {
    await expect(rUSD.connect(memberA).removeRestrictions()).to.be.reverted;
    await expect(rUSD.removeRestrictions()).to.be.reverted;
    const state = await rUSD.restrictionState();
    expect(state).to.equal(1);
  });

  it("Update RUSD restriction expiration", async function () {
    await expect(rUSD.connect(memberA).updateRestrictionExpiration()).to.be.reverted;
    await expect(rUSD.updateRestrictionExpiration()).to.emit(rUSD, "RestrictionExpirationUpdated");
    const state = await rUSD.restrictionState();
    expect(state).to.equal(1);
  });

  it("Updates RUSD to NONE restriction state by nonOwner", async function () {
    sleep(8000);
    await expect(rUSD.connect(memberA).removeRestrictions()).to.emit(rUSD, "RestrictionUpdated");
    const state = await rUSD.restrictionState();
    expect(state).to.equal(2);
  });

  it("RUSD in NONE restriction state", async function () {
    await expect(rUSD.setCreditLimit(nonMemberB.address, ethers.utils.parseUnits("1000.0", "mwei"))).to.emit(
      rUSD,
      "CreditLimitUpdate",
    );

    await expect(
      rUSD.connect(nonMemberB).transfer(nonMemberC.address, ethers.utils.parseUnits("300.0", "mwei")),
    ).to.emit(rUSD, "Transfer");
  });
});
