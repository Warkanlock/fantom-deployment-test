require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const accounts = {
  mnemonic: process.env.MNEMONIC,
  // accountsBalance: "990000000000000000000",
};

module.exports = {
  solidity: "0.8.4",
  networks: {
    fantom: {
      url: "https://rpc.ftm.tools/",
      accounts,
      chainId: 4002,
      live: true,
      saveDeployments: true,
      gasMultiplier: 2,
    },
    fantomtest: {
      url: "https://rpc.testnet.fantom.network",
      accounts,
      chainId: 4002,
      live: true,
      saveDeployments: true,
      gasMultiplier: 2,
    },
  },
};
