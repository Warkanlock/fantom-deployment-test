const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Cave Test", function () {
  it("Should return the new message once it's changed", async function () {
    const Cave = await ethers.getContractFactory("Cave");
    const caveContract = await Cave.deploy("Hello, world!");
    await caveContract.deployed();

    expect(await caveContract.messageOnWalls()).to.equal("Hello, world!");

    const setCaveTrx = await caveContract.setMessageInCave("Hola, mundo!");

    // wait until the transaction is mined
    await setCaveTrx.wait();

    expect(await caveContract.messageOnWalls()).to.equal("Hola, mundo!");
  });
});
