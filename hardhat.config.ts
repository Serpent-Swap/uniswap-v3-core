import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import * as dotenv from 'dotenv';
dotenv.config();

const config = {
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
  defaultNetwork: 'xrplDevnet',
  networks: {
    xrplDevnet: {
      url: 'https://rpc-evm-sidechain.xrpl.org/',
      chainId: 1440002,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      timeout: 10000000
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_KEY}`,
      chainId: 11155111,
      accounts: [process.env.DEPLOYER_PRIVATE_KEY],
      timeout: 10000000
    }
  },
  etherscan: {
    apiKey: {
      xrplDevnet: 'whatever',
      sepolia: process.env.ETHERSCAN_API_KEY,
    },
    customChains: [
      {
        network: 'xrplDevnet',
        chainId: 1440002,
        urls: {
          apiURL: 'https://evm-sidechain.xrpl.org/api',
          browserURL: 'https://evm-sidechain.xrpl.org',
        },
        timeout: 400000
      },
    ],
  },
};

export default config;