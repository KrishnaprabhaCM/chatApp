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

app.use(express.static('./public'));
app.use(cors());
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const Chat = require("./src/models/chatModel");


// setting up storage folder destination and filename
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, './public/images');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }

});

// specifying file type
const fileFilter = (req,file,callback)=>{
 if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
 callback(null,true);
 }
 else{
     callback(null,false);
 }
}


const upload = multer({
    storage: storage,
    fileFilter:fileFilter
  });


// multer ends

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

  app.post("/sendMessage/:username/:currentuser",upload.single('image'),(req,res)=>{

    
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
  try {
    from = req.params.currentuser;
    to = req.params.username;
    if(req.file == undefined || req.file == 'undefined')
    {
      imgPath = '';
    }
    else{
      imgPath = 'http://localhost:5000/images/'+ req.file.filename;
    }
    const newChat = Chat.create({
      fromUserName: from,
      toUserName: to,
      image: imgPath,
      chatContent: req.body.chat,
    });
    res.status(201).json(newChat);
  } catch (err) {
    console.log(err);
    res.status(400).send("Cannot create the chat");
  }
});

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
