import { HardhatUserConfig, vars} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
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

export default config;
