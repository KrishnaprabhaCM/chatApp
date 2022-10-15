const User = require("../models/userModel");
const signup = async (req, res) => {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers: Content-Type, application/json");
  res.header("Access-Control-Allow-Methods:GET,POST,PATCH,PUT,DELETE,OPTIONS");
  try {
    const newUser = await User.create({
      firstName: req.body.item.firstName,
      lastName: req.body.item.lastName,
      userName: req.body.item.chatHandle,
      email: req.body.item.userEmail,
      pwd: req.body.item.pwd,
      confPwd: req.body.item.confPwd,
    });
    res.status(201).send(newUser);
  } catch (err) {
    res.status(403).send("Cannot Create an User");
  }
};

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
// const login = async (req, res) => {
//     try {
//     //   const user = await User.find({ email: req.body.email });
//     //   if (user[0].password == req.body.password)
//     //     res.status(200).json({ authStatus: true });
//     //   else throw err;
//     } catch (err) {
//     //   res.status(403).json({ authStatus: false });
//     }
//   };

 

//   const getUserDataById = async (req, res) => {
//     try {
//       const user = await User.find({ _id: req.params.id });
//       res.status(200).json({ fullName: user[0].fullName });
//     } catch (err) {
//       res.status(403);
//     }
//   };
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
module.exports = {signup,allChatHandles,allExistingEmails}
// module.exports = {
//     // login,
//     signup,
//     // getUserDataById,
//     // muteUser,
//     // blockUser,
//     // unmuteUser,
//     // unblockUser
// };
