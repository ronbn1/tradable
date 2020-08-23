import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
   const [darkMode, setDarkMode] = useState(true);
   const [candlesData, setCandlesData] = useState({});
   // const [counter, setCounter] = useState(0);

   const setCandles = (data) => {
      // console.log("candlesData: ", candlesData);
      // const candlesObj = { ...candlesData };

      // data.map((c) => {
      //    if (candlesObj[c.symbol]) {
      //       candlesObj[c.symbol].push(c);
      //    } else {
      //       candlesObj[c.symbol] = [{ ...c }];
      //    }
      // });

      // setCandlesData(candlesObj);

      setCandlesData((prevState) => {
         console.log("prevState: ", prevState);
         const candlesObj = { ...prevState };
         console.log("candlesObj: ", candlesObj);
         data.map((c) => {
            if (candlesObj[c.symbol]) {
               candlesObj[c.symbol].push(c);
            } else {
               candlesObj[c.symbol] = [{ ...c }];
            }
         });
         // const obj = { ...candlesObj };
         // console.log("candlesData: ", candlesData);

         // Object.assign would also work
         return candlesObj;
      });
   };
   const getMode = () => {
      // console.log("mode: ", darkMode);
      // console.log("counter: ", counter);
      // console.log("mode candlesData: ", candlesData);
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
            setCandlesData,
            setDarkMode,
         }}
      >
         {props.children}
      </Context.Provider>
   );
};

export default ContextProvider;
