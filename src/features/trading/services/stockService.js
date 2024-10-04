import axios from 'axios';

// Mock API to get stock prices
const getStockPrices = async () => {
  const stockPrice = (Math.random() * 100).toFixed(2); // Random stock price between 0-100
  return { symbol: 'AAPL', price: stockPrice };
};

export default { getStockPrices };
