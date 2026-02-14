require("@nomicfoundation/hardhat-toolbox");
const { vars } = require("hardhat/config");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.26",
  networks: {
    'pharos-testnet': {
      url: 'https://atlantic.dplabs-internal.com',
      accounts: vars.has("PRIVATE_KEY") ? [vars.get("PRIVATE_KEY")] : [],
    },
  },
  etherscan: {
    apiKey: {
      'pharos-testnet': "empty",
    },
    customChains: [
      {
        network: "pharos-testnet",
        chainId: 688689,
        urls: {
          apiURL: "https://atlantic.pharosscan.xyz/api",
          browserURL: "https://atlantic.pharosscan.xyz",
        },
      },
    ],
  },
};
