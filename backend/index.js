const express = require("express");
const jwt =require("jsonwebtoken");
const multer = require("multer");
const dotenv = require("dotenv").config();
const connectDB = require("../backend/src/config/db");
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();
const nodemailer = require('nodemailer');
const http = require('http');
const { disconnect } = require('process');
const server = http.createServer(app);
const { Server } = require("socket.io");
// const io = new Server(server);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

app.use(express.static('../backend/public'));
app.use(cors());
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });
io.on('connection', (socket)=>{
  console.log('a user connected');
  socket.on('message',(msg)=>{
      console.log('message : ' + msg);
      io.emit('message', msg);
  })

  
  socket.on('disconnect',()=>{
  console.log('user disconnected')
  })
})

const chatRouter = require("../backend/src/routes/chatRoutes");
app.use("/api/chat", chatRouter);

const userRouter = require("../backend/src/routes/userRoutes");
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
