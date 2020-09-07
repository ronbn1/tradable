import express from "express";
const router = express.Router();
import config from "../../config/config.js";
import { saveCandleToDB } from "../helpers/helpers.js";
import FifteenMinute from "../models/FifteenMinute.js";
import Hour from "../models/Hour.js";
import { io } from "../candle-service.js";

router.post(`/${config.api.BASE_API}/${config.api.minute}`, (req, res) => {
   const candleWithAvg = req.candleWithAvg;
   io.emit("dataReady", candleWithAvg);
   res.send("ok");
});

router.post(`/${config.api.BASE_API}/${config.api.fifteen}`, (req, res) => {
   const candleWithAvg = req.candleWithAvg;
   saveCandleToDB(candleWithAvg, FifteenMinute);
   res.send("ok");
});

router.post(`/${config.api.BASE_API}/${config.api.hour}`, (req, res) => {
   const candleWithAvg = req.candleWithAvg;
   saveCandleToDB(candleWithAvg, Hour);
   console.log(candleWithAvg);
   res.send("ok");
});

export default router;
