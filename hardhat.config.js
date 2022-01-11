require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

const accounts = {
  mnemonic: process.env.MNEMONIC,
};

module.exports = {
  solidity: "0.8.4",
  networks: {
    fantom: {
      url: "https://rpcapi.fantom.network",
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
