import React, { useState } from "react";
import Context from "./Context";

const ContextProvider = (props) => {
   const [darkMode, setDarkMode] = useState(true);
   const [candlesData, setCandlesData] = useState({});
   // const [counter, setCounter] = useState(0);

   const setCandles = (data) => {
      setCandlesData((prevState) => {
         const candlesObj = { ...prevState };
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
