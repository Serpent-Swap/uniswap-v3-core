import { ethers } from 'hardhat';

// const nonce = 15;

async function main() {
  console.log('Deploying core contracts...');
  const uniswapV3Factory = await ethers.deployContract('UniswapV3Factory');
  await uniswapV3Factory.waitForDeployment();
  console.log(`UniswapV3Factory deployed to ${uniswapV3Factory.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
