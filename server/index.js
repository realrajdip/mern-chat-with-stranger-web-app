import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import connectionDb from "./db/connection.js";
import 'dotenv/config'
import router from "./routes/route.js";

const app = express();
const port = 5000;
const server = http.createServer(app);

app.use(cors({
  origin: "*", //any fronend req will be accepted 
}));
const io = new Server(server, {
  cors: {
    origin: "*", //any can access the request ,
  },
});

app.use(express.json()); 
connectionDb(); 


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use('/api', router); 
io.on("connection", (socket) => {
  console.log(socket.id, "connected");
  socket.emit("welcome", `Welcome to the server ${socket.id}`);
});

server.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
