import { ethers, config, upgrades } from "hardhat";
import { CeloProvider } from "@celo-tools/celo-ethers-wrapper";
import { MutualityToken__factory } from "../types";
import { HttpNetworkConfig } from "hardhat/types";

const muProxyAddress = ""; // INSERT PROXY CONTRACT ADDRESS (result of deploy mutuality)

async function main(): Promise<void> {
  const connectionInfo = config.networks.dev as HttpNetworkConfig;
  const provider = new CeloProvider(connectionInfo.url);
  await provider.ready;

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
