import { ethers, config, upgrades } from "hardhat";
import { CeloProvider } from "@celo-tools/celo-ethers-wrapper";
import { MutualityToken__factory } from "../types";
import { HttpNetworkConfig } from "hardhat/types";

async function main(): Promise<void> {
  const connectionInfo = config.networks.dev as HttpNetworkConfig;
  const provider = new CeloProvider(connectionInfo.url);
  await provider.ready;

  const MutualityToken = await ethers.getContractFactory("MutualityToken");

  const mutualityToken = await upgrades.deployProxy(MutualityToken, [ethers.utils.parseUnits("10000000", "ether")]);
  await mutualityToken.deployed();
  console.log("mutuality deployed to:", mutualityToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
