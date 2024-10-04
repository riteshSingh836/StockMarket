import stockService from '../services/stockService.js';
import tradingStrategies from '../strategies/tradingStrategies.js';
import portfolio from '../models/portfolio.js';

// Start the trading bot
export const startBot = async (req, res) => {
  try {
    setInterval(async () => {
      const stockData = await stockService.getStockPrices();
      await tradingStrategies.applyTradingStrategy(stockData, portfolio);
    }, 5000); // Checks stock prices every 5 seconds

    res.send('Trading bot started!');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Portfolio Summary
export const getPortfolioSummary = async (req, res) => {
  try {
    const summary = await portfolio.getSummary();
    res.json(summary);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
