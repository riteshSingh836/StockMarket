# Basic Trading Bot with MongoDB

This backend application simulates a basic trading bot that monitors stock price changes using mock data, executes trades based on predefined conditions, and stores trade information in MongoDB for persistent tracking.

### How to Run

1. Clone the repository:
    git clone <repository-link>
    cd trading-bot

2. Install dependencies:
    npm install

3. Ensure MongoDB is running on your machine (or connect to a MongoDB instance).

4. Start the server:
    node server.js

5. Open `http://localhost:3000/start-bot` in the browser or Postman to start the bot.

6. Open `http://localhost:3000/portfolio-summary` to view the bot's trades and profit/loss.

### Trading Logic:
- Buy when the stock price drops by 2%.
- Sell when the stock price rises by 3%.
- Trades are tracked in MongoDB and a final profit/loss is calculated based on the initial balance of $10,000.
