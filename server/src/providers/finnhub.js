import axios from "axios";
import { logger } from "../logger/logger.js";

import { createState } from "../helpers/helpers.js";
import { units } from "../config/config.js";
const state = createState(units);
const MINUTE = units.minute.endpoint;
const FIFTEEN = units.fifteen.endpoint;
const HOUR = units.hour.endpoint;

/// create new candle
const initCandle = (symbol, currentPrice, map) => {
   map[symbol] = {
      low: currentPrice,
      high: currentPrice,
      open: currentPrice,
      close: currentPrice,
      time: new Date().toLocaleTimeString(),
   };
};

const updateCandle = (candle, low, high, currentPrice) => {
   candle.low = low < currentPrice ? low : currentPrice;
   candle.high = high > currentPrice ? high : currentPrice;
   candle.close = currentPrice;
   candle.time = new Date().toLocaleTimeString();
};

const updateMap = (symbol, currentPrice, map) => {
   if (map[symbol]) {
      const candle = map[symbol];
      const { low, high } = candle;
      updateCandle(candle, low, high, currentPrice);
   } else {
      initCandle(symbol, currentPrice, map);
   }
};

//update all maps for each income data message
export const updateMaps = (jData) => {
   const dataObj = JSON.parse(jData);
   if (dataObj.type === "trade") {
      const { s: symbol, p: price } = dataObj.data[0];
      updateMap(symbol, price, state.minute.candlesMap);
      updateMap(symbol, price, state.fifteen.candlesMap);
      updateMap(symbol, price, state.hour.candlesMap);
   }
};

// Timing the data sending for each time unit
export const sendingDataTiming = () => {
   const oneMinute = 6 * 1000;
   const fifteenMinute = 15 * oneMinute;
   const oneHour = 60 * oneMinute;

   setInterval(
      () =>
         sendGroupCandlesData(
            state.minute.candlesMap,
            state.minute.lastClose,
            MINUTE
         ),
      oneMinute
   );

   setInterval(
      () =>
         sendGroupCandlesData(
            state.fifteen.candlesMap,
            state.fifteen.lastClose,
            FIFTEEN
         ),
      fifteenMinute
   );

   setInterval(
      () =>
         sendGroupCandlesData(
            state.hour.candlesMap,
            state.hour.lastClose,
            HOUR
         ),
      oneHour
   );
};

const updateCandleList = (candlesList, symbol, candlesGroupMap, lastClose) => {
   if (lastClose[symbol]) {
      candlesList.push({
         symbol,
         ...candlesGroupMap[symbol],
         open: lastClose[symbol],
      });
      lastClose[symbol] = candlesGroupMap[symbol].close;
   } else {
      lastClose[symbol] = candlesGroupMap[symbol].close;
      candlesList.push({ symbol, ...candlesGroupMap[symbol] });
   }
};

//send data every time unit
const sendGroupCandlesData = (candlesGroupMap, lastClose, endpoint) => {
   const candlesList = [];

   try {
      Object.keys(candlesGroupMap).map((symbol) => {
         updateCandleList(candlesList, symbol, candlesGroupMap, lastClose);
      });

      axios.post(`http://localhost:3000/getcandles/${endpoint}`, candlesList);
      logger.error({
         message: "Candles sent successfully",
         candlesList,
      });
   } catch (e) {
      logger.error({
         message: `ERROR - ${e} `,
      });
   }
};

sendingDataTiming();
