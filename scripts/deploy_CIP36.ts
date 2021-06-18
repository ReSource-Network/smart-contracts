import { config, ethers } from "hardhat";
import { CeloProvider } from "@celo-tools/celo-ethers-wrapper";
import { CIP36__factory } from "../types";
import { HttpNetworkConfig } from "hardhat/types";
import { CIP36 } from "../types/CIP36";

async function main(): Promise<void> {
  const connectionInfo = config.networks.testnet as HttpNetworkConfig;
  const provider = new CeloProvider(connectionInfo.url);
  await provider.ready;
  console.log((await ethers.getSigners())[0]);
  const factory = new CIP36__factory((await ethers.getSigners())[0]);

  const cip36 = (await factory.deploy()) as CIP36;

  console.log("CIP36 deployed to:", cip36.address);
}

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });
