import express from "express";
import config from "../config/config.js";
import { updateMaps, sendingDataTiming } from "./candleBuilder.js";
import WebSocket from "ws";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const socket = new WebSocket(
   `wss://ws.finnhub.io?token=${process.env.API_KEY}`
);

// Connection opened -> Subscribe
socket.addEventListener("open", function (event) {
   config.methods.getSymbols().map((s) => socket.send(JSON.stringify(s)));
});

// Listen for messages
socket.addEventListener("message", ({ data }) => {
   console.log(data);
   updateMaps(data);
});

// Unsubscribe
const unsubscribe = (symbol) =>
   socket.send(JSON.stringify({ type: "unsubscribe", symbol }));

app.listen(PORT, () => {
   console.log(`Server is running in http://localhost:${PORT}`);
});
