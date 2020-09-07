import express from "express";
import routes from "./getCandles.js";
import { addCandleAvg } from "../helpers/helpers.js";

const app = express();

app.use("/", addCandleAvg, routes);

export default app;
