import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";
const PORT = process.env.PORT || 5000;
dotenv.config();

import http from "http";
import socketIo from "socket.io";

const app = express();
app.use(express.json());
app.use(routes);
const server = new http.createServer(app);

const io = socketIo(server);

server.listen(PORT, () => {
   console.log(`Server is running in http://localhost:${PORT}`);
});
export { io };
