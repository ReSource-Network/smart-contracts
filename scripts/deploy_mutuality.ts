import { ethers, upgrades } from "hardhat";
import { MutualityToken } from "../types/MutualityToken";

async function main(): Promise<void> {
  const MutualityToken = await ethers.getContractFactory("MutualityToken");
  const mutualityToken = (await upgrades.deployProxy(MutualityToken, [
    ethers.utils.parseEther("10000000"),
  ])) as MutualityToken;
  await mutualityToken.deployed();

  console.log("mutuality deployed to:", mutualityToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
