import { ethers } from "hardhat";
import { CIP36__factory } from "../types";
import { CIP36 } from "../types/CIP36";

async function main(): Promise<void> {
  // todo: fix
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
