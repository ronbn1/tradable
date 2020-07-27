/* 
// client needs to get
const list = [
   {
      symbol: "asdsa",
      high: 2134,
      low: 23.3,
      close: 23.3,
      open: 23.3,
      //   time: miliseconds/date  this is the update time? create only date for the moment you got the price
   },
];
//how many lists i need to create? one for all?

//a list will be for each symbol, for each time unit table
// think in terms of:
const minCandleMap = {
    //'btc/usd': {low, high...}
}
const feefteenMinCandleMap = {
    //'btc/usd': {low, high...}
}
const minCandleMap hour = {
    //'btc/usd': {low, high...}
}
//got the point

//the FN return only the min list? and the others save in db? no
// now good practice to לשבור תראש על האלגוריתם ;)
//יאללה, עד שיצא עשן !! יצא אל תדאג חחח אין לי ספק פה אתה גדל, יאללה נדבר
// סגור ! תודה!!
//structure
setTimeout(() => {
    updateMaps()
}, 1000);
setTimeout(() => {
    if (now is exactly 1min round! ) {
    sendCandle()
   }
}, 60 * 1000);
function updateMaps() {
    updateMap()
 }
function updateMap() { }
function sendCandle() { //send  candle to another node proccess so it will send to client and save to DB }

// saving to db - only 15min and 1hour to save space, 1min only sending to show real time effect ;)
// u need to build an algoiritm that will build the each candle in the currect way for - high, low, close, open,
// close - the last price updated
// open - the first price,
// high - the highest price ,
// low - lowest

//the function should run every time we get a price for symbol - update the prices and after 15min you have a candle ready
// got my point? yes

// const candles = [];
// const candlesBuilder = (data) => {
//    const dataObj = JSON.parse(data);
//    if (dataObj.type === "trade") {

//    return candles;
// };

// module.exports = {
//    candlesBuilder,
// }
*/

const axios = require("axios");
const minCandleMap = {};
const fifteenMinCandleMap = {};
const hourCandleMap = {};
const lastClose = {
   minMap: {},
   fifteenMap: {},
   hourMap: {},
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
      map[symbol] = {
         low: currentPrice,
         high: currentPrice,
         open: currentPrice,
         close: currentPrice,
         time: new Date().toLocaleTimeString(),
      };
   }
};

const updateMaps = (jData) => {
   const dataObj = JSON.parse(jData);
   if (dataObj.type === "trade") {
      const { s, p } = dataObj.data[0];

      updateMap(s, p, minCandleMap);
      updateMap(s, p, fifteenMinCandleMap);
      updateMap(s, p, hourCandleMap);
   }
   return minCandleMap;
};

const setTiming = (map, lastClose, url, time) => {
   setInterval(() => sendGroupCandlesData(map, lastClose, url), time);
};

const sendingDataTiming = () => {
   setTiming(minCandleMap, lastClose.minMap, "minute", 60 * 1000);
   setTiming(
      fifteenMinCandleMap,
      lastClose.fifteenMap,
      "fifteen",
      15 * 60 * 1000
   );
   setTiming(hourCandleMap, lastClose.hourMap, "hour", 60 * 60 * 1000);
};

const sendGroupCandlesData = (candlesGroupMap, lastClose, url) => {
   const data = [];
   try {
      Object.keys(candlesGroupMap).map((symbol) => {
         if (lastClose[symbol]) {
            data.push({
               symbol,
               ...candlesGroupMap[symbol],
               open: lastClose[symbol],
            });
            lastClose[symbol] = candlesGroupMap[symbol].close;
         } else {
            lastClose[symbol] = candlesGroupMap[symbol].close;

            data.push({ symbol, ...candlesGroupMap[symbol] });
         }
      });

      axios.post(`http://localhost:5000/${url}`, data);
   } catch (e) {
      console.log(e);
   }
};

module.exports = {
   updateMaps,
   sendingDataTiming,
};

sendingDataTiming();
