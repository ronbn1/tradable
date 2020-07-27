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
const minCandleMap = {};
const fifteenMinCandleMap = {};
const hourCandleMap = {};

const updateMap = (symbol, currentPrice, map) => {
   if (map[symbol]) {
      map[symbol].low =
         map[symbol].low < currentPrice ? map[symbol].low : currentPrice;

      map[symbol].high =
         map[symbol].high > currentPrice ? map[symbol].high : currentPrice;

      map[symbol].lastPrice = currentPrice;
   } else {
      map[symbol] = {
         low: currentPrice,
         high: currentPrice,
         open: currentPrice,
         close: null,
         lastPrice: currentPrice,
         time: Date.now(),
      };
   }
};

const updateMaps = (jData) => {
   const dataObj = JSON.parse(jData);
   if (dataObj.type === "trade") {
      const symbol = dataObj.data[0].s;
      const currentPrice = dataObj.data[0].p;
      updateMap(symbol, currentPrice, minCandleMap);
      updateMap(symbol, currentPrice, fifteenMinCandleMap);
      updateMap(symbol, currentPrice, hourCandleMap);
   }
   return minCandleMap;
};

const closeCandle = () => {
   setTimeout(() => {
      //one minute
      setInterval(() => {
         for (s in minCandleMap) {
            minCandleMap[s].close = minCandleMap[s].lastPrice;
         }
         //sendCandlesToClient();
      }, 60 * 1000);
   }, 60 * 1000);

   setTimeout(() => {
      //15 minute
      setInterval(() => {
         for (s in minCandleMap) {
            fifteenMinCandleMap[s].close = fifteenMinCandleMap[s].lastPrice;
         }
         //sendCandlesToClient();
         //storeInDB()
      }, 15 * 60 * 1000);
   }, 15 * 60 * 1000);

   setTimeout(() => {
      //60 minute
      setInterval(() => {
         for (s in minCandleMap) {
            hourCandleMap[s].close = hourCandleMap[s].lastPrice;
         }
         //sendCandlesToClient();
         //storeInDB()
      }, 60 * 60 * 1000);
   }, 60 * 60 * 1000);
};

module.exports = {
   updateMaps,
   closeCandle,
};
