const User = require("../models/userModel");
const nodemailer = require('nodemailer');
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers: Content-Type, application/json");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  otp = req.params.otp;
  try {
    const newUser = await User.create({
      firstName: req.body.item.firstName,
      lastName: req.body.item.lastName,
      email: req.body.item.userEmail,
      pwd: req.body.item.pwd,
      confPwd: req.body.item.confPwd,
      otp: otp,
    });
    res.status(201).send(newUser);
  } catch (err) {
    res.status(403).send("Cannot Create an User");
  }
};

const login = async (req,res) =>{
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers: Content-Type, application/json");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  try{
    uname = req.body.item.chatHandle;
    pwd = req.body.item.pwd;
    User.findOne({"userName":uname},function(err,user){
      if(user){
        if(pwd == user.pwd){
          let payload = {subject:uname+pwd};
          let token =jwt.sign(payload,'secretkey');
          let userNames = {subject:uname};
          let userToken = jwt.sign(userNames.subject,'secretkey');
          const username = jwt.verify(userToken, "secretkey");
          res.status(200).send({user:true,token,username});
        }
        else
        {
          res.json({unathorised:true}).status(401);
        }
      }
      else
      {
        res.json({unathorised:true}).status(401);
      }
    })
  }
  catch{
    console.log("Login error");
  }
}

const allChatHandles = async (req,res) => {
  try{
    uName = req.body.item;
    User.find({$and:[{userName:uName}]}).then((data)=>{
      res.send(data);
     });
  }
  catch (err){
    console.log('Error while fetching existing chat handles');
  }
}
const allExistingEmails = async (req,res) => {
  try{
    userEmail = req.body.item;
    User.find({$and:[{email:userEmail}]}).then((data)=>{
      res.send(data);
     });
  }
  catch (err){
    console.log('Error while fetching existing chat handles');
  }
}

const sendEmailOTP = async (req,res) => {
  try{
    userEmail = req.body.item;
    otp = req.params.otp;
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'theresumewizardteam@gmail.com',
          pass: 'eqablhrqwjkadqsc',
      }
    });
    const mailOptions = {
      from: 'theresumewizardteam@gmail.com',
      to: 'krishnaprabha173@gmail.com',
      // to: userEmail,
      subject: `OTP for chat application`,
      html:`Your OTP for verifying your email for chat application is ` + otp
    };

      transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error)
      } else {
        console.log("email sent successful")
      }
    }
      );
  }
  catch (err){
    console.log('Error while sending OTP');
  }
}

  const getUserById = async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.userId });
      res.status(200).json({ otp: user.otp });
    } catch (err) {
      res.status(403);
    }
  };

  const verifyOTP = async (req, res) => {
    try {
      id = req.body.item;
      await User.findByIdAndUpdate({ _id: id },{$set:{"otpVerified":"1"}}).then((data)=>{
        res.send(data);
      })
    } catch (err) {
      res.status(403);
    }
  };

  const createUserName = async (req, res) => {
    try {
      id = req.params.userId;
      userName = req.body.item;
      await User.findByIdAndUpdate({ _id: id },{$set:{"userName":userName}}).then((data)=>{
        res.send(data);
      })
    } catch (err) {
      res.status(403);
    }
  };

//   const muteUser = async (req, res) => {
//     try {
//       const user = await User.find({ _id: req.params.id });
//       res.status(200).json({ fullName: user[0].fullName });
//     } catch (err) {
//       res.status(403);
//     }
//   };
//   const blockUser = async (req, res) => {
//     try {
//       const user = await User.find({ _id: req.params.id });
//       res.status(200).json({ fullName: user[0].fullName });
//     } catch (err) {
//       res.status(403);
//     }
//   };
//   const unmuteUser = async (req, res) => {
//     try {
//       const user = await User.find({ _id: req.params.id });
//       res.status(200).json({ fullName: user[0].fullName });
//     } catch (err) {
//       res.status(403);
//     }
//   };
//   const unblockUser = async (req, res) => {
//     try {
//       const user = await User.find({ _id: req.params.id });
//       res.status(200).json({ fullName: user[0].fullName });
//     } catch (err) {
//       res.status(403);
//     }
//   };
module.exports = {
  signup,
  allChatHandles,
  allExistingEmails,
  sendEmailOTP,
  getUserById,
  verifyOTP,
  login,
  createUserName}
// module.exports = {
//     // login,
//     signup,
//     // getUserDataById,
//     // muteUser,
//     // blockUser,
//     // unmuteUser,
//     // unblockUser
// };
