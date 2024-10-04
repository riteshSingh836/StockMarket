import Trade from './trade.js';

class Portfolio {
  constructor() {
    this.balance = 10000; // Initial balance
  }

  async addTrade(action, price) {
    const newTrade = new Trade({ action, price });
    await newTrade.save(); // Save the trade in the database

    if (action === 'buy') {
      this.balance -= price;
    } else if (action === 'sell') {
      this.balance += price;
    }
  }

  async getLastTrade() {
    return await Trade.findOne().sort({ timestamp: -1 }); // Get the most recent trade
  }

  async getSummary() {
    const trades = await Trade.find(); // Fetch all trades
    const profitLoss = this.balance - 10000; // Initial balance is $10,000
    return {
      trades,
      balance: this.balance,
      profitLoss
    };
  }
}

export default new Portfolio();
