import express from "express";
import routes from "./getCandles.js";
const app = express();

app.use("/", routes);

export default app;