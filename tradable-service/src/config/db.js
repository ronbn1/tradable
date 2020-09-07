import mongoose from "mongoose";
import { logger } from "../logger/logger.js";

export const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGODB_URI, {
         useNewUrlParser: true,
         useCreateIndex: true,
         useFindAndModify: false,
         useUnifiedTopology: true,
      });

      console.log("MongoDB Connected...");
   } catch (err) {
      logger.error({
         message: `ERROR - ${e} `,
      });
      process.exit(1);
   }
};
