import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FifteenMinuteSchema = new Schema({
   open: {
      type: Number,
   },
   close: {
      type: Number,
   },
   high: {
      type: Number,
   },
   low: {
      type: Number,
   },
   symbol: {
      type: String,
   },
   date: {
      type: Date,
      default: Date.now,
   },
});

const FifteenMinuteCandles = mongoose.model(
   "FifteenMinuteCandles",
   FifteenMinuteSchema
);
export default FifteenMinuteCandles;
