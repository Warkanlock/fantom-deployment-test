const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Cave = await hre.ethers.getContractFactory("Cave");

  // We set the constructor of the contract within a message
  const caveContract = await Cave.deploy(
    "This message will be painted on the walls, forever!"
  );

  await caveContract.deployed();
  console.log("Cave deployed to:", caveContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
