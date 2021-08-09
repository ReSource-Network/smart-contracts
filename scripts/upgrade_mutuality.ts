import { ethers, upgrades } from "hardhat";

const muProxyAddress = ""; // INSERT PROXY CONTRACT ADDRESS (result of deploy mutuality)

async function main(): Promise<void> {
  const MutualityTokenV2 = await ethers.getContractFactory("MutualityToken_V2");

  const mutualityToken = await upgrades.upgradeProxy(muProxyAddress, MutualityTokenV2);
  await mutualityToken.deployed();
  console.log("mutuality deployed to:", mutualityToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
