import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const server = http.createServer(app);
const port = process.env.PORT || 1000;
server.listen(port);
