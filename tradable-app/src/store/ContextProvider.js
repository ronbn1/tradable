import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
   const [darkMode, setDarkMode] = useState(true);
   const [candlesData, setCandlesData] = useState({});

   const setCandles = (data) => {
      const candlesObj = candlesData;
      data.map((c) => {
         if (candlesObj[c.symbol]) {
            candlesObj[c.symbol].push(c);
         } else {
            candlesObj[c.symbol] = [{ ...c }];
         }
      });
      const obj = { ...candlesObj };
      setCandlesData(obj);
      // console.log(obj);
   };

   const getMode = () => {
      return darkMode ? "darkMode" : "lightMode";
   };

   return (
      <Context.Provider
         value={{
            darkMode,
            setDarkMode,
            getMode,
            setCandles,
            candlesData,
         }}
      >
         {props.children}
      </Context.Provider>
   );
};

export default ContextProvider;
