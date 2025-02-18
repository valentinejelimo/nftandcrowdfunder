const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftmarketplace = await NFTMarketplace.deploy();

  await nftmarketplace.deployed();

  console.log(`Deployed contract Address: ${nftmarketplace.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
