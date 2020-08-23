import io from "socket.io-client";

export const socketConnection = (setCandles) => {
   const socket = io(process.env.REACT_APP_ENDPOINT);

   socket.on("dataReady", (data) => {
      // console.log("setCandles: ", setCandles);
      setCandles(data);
      // console.log("Socket file: ", candlesData);
   });
};
