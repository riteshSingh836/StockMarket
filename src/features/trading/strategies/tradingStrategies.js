// Simple trading strategy: Buy at -2%, Sell at +3%
const applyTradingStrategy = async (stockData, portfolio) => {
    const { price } = stockData;
    const lastTrade = await portfolio.getLastTrade();
    
    // Buying Condition (Stock drops by 2%)
    if (!lastTrade || lastTrade.action === 'sell') {
      if (lastTrade && price <= lastTrade.price * 0.98) {
        await portfolio.addTrade('buy', price);
        console.log(`Bought at price: $${price}`);
      }
    }
    
    // Selling Condition (Stock rises by 3%)
    if (lastTrade && lastTrade.action === 'buy') {
      if (price >= lastTrade.price * 1.03) {
        await portfolio.addTrade('sell', price);
        console.log(`Sold at price: $${price}`);
      }
    }
  };
  
  export default { applyTradingStrategy };
  