import axios from "axios";
import { logger } from "../logger/logger.js";
import { createState } from "./helpers/helpers.js";
import config from "../config/config.js";
const state = createState(config.unitsName);

/// create new candle
const initCandle = (symbol, currentPrice, map) => {
   map[symbol] = {
      low: currentPrice,
      high: currentPrice,
      open: currentPrice,
      close: currentPrice,
      time: new Date(),
   };
};

const updateCandle = (map, currentPrice) => {
   const { low, high } = map;
   map.low = low < currentPrice ? low : currentPrice;
   map.high = high > currentPrice ? high : currentPrice;
   map.close = currentPrice;
   map.time = new Date();
};

const updateMap = (symbol, currentPrice, map) => {
   if (map[symbol]) return updateCandle(map[symbol], currentPrice);

   initCandle(symbol, currentPrice, map);
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
   Object.values(config.unitsName).map((unitName) => {
      const timing = config.timingCandles[unitName];
      const candleMap = state[unitName].candlesMap;
      const lastClose = state[unitName].lastClose;

      setInterval(
         () => sendGroupCandlesData(candleMap, lastClose, unitName),
         timing
      );
   });
};

const updateCandleList = (candlesList, symbol, candlesGroupMap, lastClose) => {
   const list = { symbol, ...candlesGroupMap[symbol] };
   if (lastClose[symbol]) {
      list.open = lastClose[symbol];
   }

   candlesList.push(list);
   lastClose[symbol] = candlesGroupMap[symbol].close;
};

const sendGroupCandlesData = (candlesGroupMap, lastClose, unitName) => {
   try {
      const candlesList = [];
      Object.keys(candlesGroupMap).map((symbol) => {
         updateCandleList(candlesList, symbol, candlesGroupMap, lastClose);
      });
      axios
         .post(
            `http://localhost:5000/${config.api.BASE_API}/${config.api[unitName]}`,
            candlesList
         )
         .then((res) => {
            logger.info({
               // should not be error
               message: "Candles sent successfully",
               candlesList,
            });
            Object.keys(candlesGroupMap).map((symbol) => {
               candlesGroupMap[symbol].low = candlesGroupMap[symbol].close;
               candlesGroupMap[symbol].high = candlesGroupMap[symbol].close;
            });
         })
         .catch((e) => logger.error({}));
   } catch (e) {
      logger.error({
         message: `ERROR - ${e} `,
      });
   }
};

sendingDataTiming();
