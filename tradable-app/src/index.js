import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import GlobalStyle from "./themes/globalStyls";
import ContextProvider from "./store/ContextProvider";
ReactDOM.render(
   <>
      <GlobalStyle />
      <ContextProvider>
         <App />
      </ContextProvider>
   </>,
   document.getElementById("root")
);
