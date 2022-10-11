// const express=require("express");
// const cors = require("cors");
// const jwt =require("jsonwebtoken");
// const multer = require("multer");
// const dotenv = require("dotenv").config();
// const app = new express();
// const PORT = process.env.PORT || 4001;

// const userModel = require('../../backend/src/models/userModel');

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static('./public'));
// // setting up storage folder destination and filename
// const storage = multer.diskStorage({
//     destination: function(req, file, callback) {
//       callback(null, './public/images');
//     },
//     filename: function (req, file, callback) {
//       callback(null, file.originalname);
//     }
//   });
  
//  // specifying file type
//   const fileFilter = (req,file,callback)=>{
//    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png'){
//    callback(null,true);
//    }
//    else{
//        callback(null,false);
//    }
//   }
  
  
//   const upload = multer({
//       storage: storage,
//       fileFilter:fileFilter
//     });
  

// // multer ends


// // Middleware Fuction to verify Token send from FrontEnd
// function verifyToken(req,res,next){

//     if(!req.headers.authorization){
//        return res.status(401).send("Unauthorized Access")
//     }
//     let token = req.headers.authorization.split(' ')[1];
   
//    if(token == "null"){
//        return res.status(401).send("Unauthorized Access")
//    }
  
//    let payload= jwt.verify(token , "secretkey")
//    if(!payload){
//        return res.status(401).send("Unauthorized Access")
//    }
//    req.userId = payload.subject
//         next()
//    };

// app.listen(PORT,()=>{
//     // console.log("server is running");
//     console.log(`Server running in port ${PORT}`);

// });

const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;
const app = express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const chatRouter = require("./routes/chatRoutes");
app.use("/api/chat", chatRouter);
// const userRouter = require("./routes/userRoutes");
// app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
