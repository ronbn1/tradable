const candlePrices = {};

const setNewSymbol = (symbol) => {
   candlePrices[symbol] = {
      prices: [],
      sum: 0,
      linearAvg: {
         factor: 0,
         linearSum: 0,
         prices: [],
      },
   };
};

const updateSymbol = (symbol, price, type) => {
   switch (type) {
      case "simple":
         candlePrices[symbol].prices.push(price);
         candlePrices[symbol].sum += price;
         return;
      case "linear":
         candlePrices[symbol].linearAvg.prices.push(price);
         let factor = 0;
         candlePrices[symbol].linearAvg.linearSum = 0;
         for (
            let i = 1;
            i <= candlePrices[symbol].linearAvg.prices.length;
            i++
         ) {
            factor += i;
            candlePrices[symbol].linearAvg.factor = factor;
            candlePrices[symbol].linearAvg.linearSum +=
               i * candlePrices[symbol].linearAvg.prices[i - 1];
         }
         return;
   }
};

const addSimpleAvg = (candlesList) => {
   const candlesWithSimpleAvg = candlesList.map((candle) => {
      const { symbol, close } = candle;
      updateSymbol(symbol, close, "simple");
      candle.avg.simpleAvg =
         candlePrices[symbol].sum / candlePrices[symbol].prices.length;

      return candle;
   });
   return candlesWithSimpleAvg;
};

const addLinearAvg = (candlesList) => {
   const candlesWithLinearAvg = candlesList.map((candle) => {
      const { symbol, close } = candle;
      updateSymbol(candle.symbol, close, "linear");
      candle.avg.linearAvg =
         candlePrices[symbol].linearAvg.linearSum /
         candlePrices[symbol].linearAvg.factor;

      return candle;
   });

   return candlesWithLinearAvg;
};

export const addCandleAvg = (candlesList) => {
   candlesList.forEach((candle) => {
      const { symbol } = candle;
      candle.avg = {};
      if (!candlePrices[symbol]) {
         setNewSymbol(symbol);
      }
   });

   const candleWithSimpleAvg = addSimpleAvg(candlesList);
   const candleWithLinearAvg = addLinearAvg(candleWithSimpleAvg);

   return candleWithLinearAvg;
};
