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
const minCandleLists = {};
const fifteenCandleLists = {};
const hourCandleLists = {};

const updateMap = (symbol, currentPrice, map) => {
   if (map[symbol]) {
      map[symbol].low =
         map[symbol].low < currentPrice ? map[symbol].low : currentPrice;

      map[symbol].high =
         map[symbol].high > currentPrice ? map[symbol].high : currentPrice;

      map[symbol].time = new Date().toLocaleTimeString();

      map[symbol].lastPrice = currentPrice;
   } else {
      map[symbol] = {
         low: currentPrice,
         high: currentPrice,
         open: currentPrice,
         close: null,
         lastPrice: currentPrice,
         time: new Date().toLocaleTimeString(),
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

const addCandlesToLists = (map, list, symbol) => {
   const toAdd = { ...map[symbol] };
   list[symbol] = list[symbol] ? [...list[symbol], toAdd] : [toAdd];
};

const closeCandle = (map, list, time) => {
   setTimeout(() => {
      setInterval(() => {
         for (s in map) {
            map[s].close = map[s].lastPrice;
            addCandlesToLists(map, list, s);
         }
         //sendCandlesToClient();
         console.log("list", list);
      }, time);
   }, time);
};
const closeCandles = () => {
   closeCandle(minCandleMap, minCandleLists, 60 * 1000);
   closeCandle(fifteenMinCandleMap, fifteenCandleLists, 15 * 60 * 1000);
   closeCandle(hourCandleMap, hourCandleLists, 60 * 60 * 1000);
};

module.exports = {
   updateMaps,
   closeCandles,
};
