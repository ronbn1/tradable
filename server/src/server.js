import express from "express";
import { getSymbols } from "./config/config.js";
import { updateMaps, sendingDataTiming } from "./providers/finnhub.js";
import WebSocket from "ws";
import routes from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

const socket = new WebSocket(
   `wss://ws.finnhub.io?token=${process.env.API_KEY}`
);

// Connection opened -> Subscribe
socket.addEventListener("open", function (event) {
   getSymbols().map((s) => socket.send(JSON.stringify(s)));
});

// Listen for messages
socket.addEventListener("message", ({ data }) => updateMaps(data));

// Unsubscribe
const unsubscribe = (symbol) =>
   socket.send(JSON.stringify({ type: "unsubscribe", symbol }));

app.listen(PORT, () => {
   console.log(`Server is running in http://localhost:${PORT}`);
});
