import mongoose from 'mongoose';

const TradeSchema = new mongoose.Schema({
  action: {
    type: String,
    enum: ['buy', 'sell'],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  }
});

const Trade = mongoose.model('Trade', TradeSchema);

export default Trade;
