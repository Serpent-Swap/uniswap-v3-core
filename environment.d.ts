export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DEPLOYER_ADDRESS: string;
      DEPLOYER_PRIVATE_KEY: string;
    }
  }
}
