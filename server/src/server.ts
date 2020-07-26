import * as express from "express";
const symbols = require("./providers/symbols.js");
const WebSocket = require("ws");
const app = express();
const socket = new WebSocket("wss://ws.finnhub.io?token=bse6fvvrh5rea8raarvg");
const PORT = process.env.PORT || 3000;

// Connection opened -> Subscribe
socket.addEventListener("open", function (event) {
   socket.send(
      JSON.stringify({ type: "subscribe", symbol: "BINANCE:IRISBNB" })
   );
   //symbols.getSymbols().forEach((s) => socket.send(JSON.stringify(s)));
});

// Listen for messages
socket.addEventListener("message", function (event) {
   console.log("Message from server ", event.data);
});

// Unsubscribe
var unsubscribe = function (symbol) {
   socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
};

app.listen(PORT, () => {
   console.log(`Server is running in http://localhost:${PORT}`);
});
