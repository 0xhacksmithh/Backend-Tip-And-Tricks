import {
  fetchBitcoinPrice,
  fetchEthereumPrice,
  fetchSolanaPrice,
} from "./crypto.js";

async function getPortfoioData() {
  try {
    console.log("Fetching Crypto Prices ....");

    const result = await Promise.all([
      fetchBitcoinPrice(),
      fetchEthereumPrice(),
      fetchSolanaPrice(),
    ]);

    console.log("\nPortfolio Data ::");

    result.forEach((price) => {
      console.log(price);
    });
  } catch (error) {
    console.log("Error:: ", error);
  }
}

getPortfoioData();
