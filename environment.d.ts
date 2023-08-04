export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEPLOYER_ADDRESS: string;
      DEPLOYER_PRIVATE_KEY: string;
      ETHERSCAN_API_KEY: string;
      INFURA_KEY: string;
    }
  }
}
