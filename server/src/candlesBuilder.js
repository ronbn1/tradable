const axios = require("axios");
const logger = require("./logger");
const minCandleMap = {};
const fifteenMinCandleMap = {};
const hourCandleMap = {};
const lastClose = {
   minMap: {},
   fifteenMap: {},
   hourMap: {},
};
const endpoints = {
   minute: "minute",
   fifteen: "fifteen",
   hour: "hour",
};

/// initial new candle
const initCandle = (symbol, currentPrice, map) => {
   map[symbol] = {
      low: currentPrice,
      high: currentPrice,
      open: currentPrice,
      close: currentPrice,
      time: new Date().toLocaleTimeString(),
   };
};

const updateMap = (symbol, currentPrice, map) => {
   if (map[symbol]) {
      map[symbol].low =
         map[symbol].low < currentPrice ? map[symbol].low : currentPrice;

      map[symbol].high =
         map[symbol].high > currentPrice ? map[symbol].high : currentPrice;

      map[symbol].close = currentPrice;
      map[symbol].time = new Date().toLocaleTimeString();
   } else {
      initCandle(symbol, currentPrice, map);
   }
};

//update all maps for each income data message
const updateMaps = (jData) => {
   const dataObj = JSON.parse(jData);
   if (dataObj.type === "trade") {
      const { s, p } = dataObj.data[0];

      updateMap(s, p, minCandleMap);
      updateMap(s, p, fifteenMinCandleMap);
      updateMap(s, p, hourCandleMap);
   }
};

// Timing the data sending
const setTiming = (map, lastClose, endpoint, time) => {
   setInterval(() => sendGroupCandlesData(map, lastClose, endpoint), time);
};

// Timing the data sending for each time unit
const sendingDataTiming = () => {
   const { minute, fifteen, hour } = endpoints;
   const oneMinute = 6 * 1000;
   const fifteenMinute = 15 * oneMinute;
   const oneHour = 60 * oneMinute;
   setTiming(minCandleMap, lastClose.minMap, minute, oneMinute);
   setTiming(fifteenMinCandleMap, lastClose.fifteenMap, fifteen, fifteenMinute);
   setTiming(hourCandleMap, lastClose.hourMap, hour, oneHour);
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
      //axios.post(`ocalhost:5000/${endpoint}`, candlesList);
      logger.logger.error({
         message: "Candles sent successfully",
         candlesList,
      });
   } catch (e) {
      logger.logger.error({
         message: `ERROR - ${e} `,
      });
   }
};

module.exports = {
   updateMaps,
   sendingDataTiming,
};

sendingDataTiming();
