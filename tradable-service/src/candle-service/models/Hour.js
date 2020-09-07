import mongoose from "mongoose";
const Schema = mongoose.Schema;

const HourSchema = new Schema({
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

const HourCandles = mongoose.model("HourCandles", HourSchema);
export default HourCandles;
