function fetchBitcoinPrice() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Bitcoin :: $65000");
    }, 2000);
  });
}

function fetchEthereumPrice() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Etereum :: $2000");
    }, 15000);
  });
}

function fetchSolanaPrice() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Solana :: $145");
    }, 2000);
  });
}

export { fetchBitcoinPrice, fetchEthereumPrice, fetchSolanaPrice };
