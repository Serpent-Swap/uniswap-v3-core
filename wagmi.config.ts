import { defineConfig } from '@wagmi/cli';
import { hardhat } from '@wagmi/cli/plugins';

export default defineConfig({
  out: 'wagmi/uniswap-v3-core.ts',
  contracts: [],
  plugins: [
    hardhat({
      project: './'
    })
  ],
});
