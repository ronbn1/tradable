import express from "express";
const router = express.Router();
import config from "../../config/config.js";
import { addCandleAvg } from "../helpers/helpers.js";
import { io } from "../candle-service.js";

router.post(`/${config.api.BASE_API}/${config.api.minute}`, (req, res) => {
   const candleWithAvg = addCandleAvg(req.body);
   io.emit("dataReady", candleWithAvg);
   res.send("ok");
});

router.post(`/${config.api.BASE_API}/${config.api.fifteen}`, (req, res) => {
   const candleWithAvg = addCandleAvg(req.body);
   res.send("ok");
});

router.post(`/${config.api.BASE_API}/${config.api.hour}`, (req, res) => {
   const candleWithAvg = addCandleAvg(req.body);
   console.log(candleWithAvg);
   res.send("ok");
});
export default router;
