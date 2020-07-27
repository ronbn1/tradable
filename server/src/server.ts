import * as express from "express";
const PORT = process.env.PORT || 3000;
const app = express();
const symbols = require("./providers/symbols.js");
const candles = require("./candlesBuilder.js");
const WebSocket = require("ws");
const socket = new WebSocket("wss://ws.finnhub.io?token=bse6fvvrh5rea8raarvg");

// Connection opened -> Subscribe
socket.addEventListener("open", function (event) {
   symbols.getSymbols().forEach((s) => {
      socket.send(JSON.stringify(s));
   });
});

// Listen for messages
socket.addEventListener("message", function (event) {
   console.log(event.data);
   candles.updateMaps(event.data);
});

// Unsubscribe
var unsubscribe = function (symbol) {
   socket.send(JSON.stringify({ type: "unsubscribe", symbol: symbol }));
};

app.listen(PORT, () => {
   candles.closeCandles();
   console.log(`Server is running in http://localhost:${PORT}`);
});
