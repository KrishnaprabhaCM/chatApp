const Chat = require("../models/chatModel");
const User = require("../models/userModel");
// const multer = require("multer");
// setting up storage folder destination and filename
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
  

// multer ends

const searchUser = async (req,res) => {
  searchTerm = req.body.values.searchTerm;
  userName1 = req.params.username;
  try
  {
    const users = await User.find( {
     $and:[
        { userName: { $ne: userName1} },
        { userName: searchTerm }
      ]
    } )
    res.status(201).json(users);
  }
  catch(err){
    console.log(err);
  }
}

// const createChat = async (req, res) => {
//   try {
//     const newChat = await Chat.create({
//       fromUserName: req.body.fromUserName,
//       toUserName: req.body.toUserName,
//       chatType: req.body.chatType,
//       chatContent: req.body.chatContent
//     });
//     res.status(201).json(newChat);
//   } catch (err) {
//     res.status(400).send("Cannot create the chat");
//   }
// };

// const getChatByUserId = async (req, res) => {
//   try {
//     const chat = await Chat.findById(req.params.id);
//     res.status(200).json(chat);
//   } catch {
//     res.status(400);
//     res.send({ error: "User doesn't exist!" });
//   }
// };

// const getChatById = async (req, res) => {
//   try {
//     const chat = await Chat.findById(req.params.id);
//     res.status(200).json(chat);
//   } catch {
//     res.status(400);
//     res.send({ error: "Cannot get chat" });
//   }
// };

// const deleteChat = async (req, res) => {
//   try {
//     await Chat.deleteOne({ _id: req.params.id });
//     res.status(204).send();
//   } catch {
//     res.status(400);
//     res.send({ error: "Chat doesn't exist!" });
//   }
//   // try {
//   //   const blog = await Blog.findById(req.params.id);

//   //   if (req.body.title) blog.title = req.body.title;

//   //   if (req.body.blogBody) blog.blogBody = req.body.blogBody;

//   //   await blog.save();
//   //   res.send(blog);
//   // } catch {
//   //   res.status(404);
//   //   res.send({ error: "Blog doesn't exist!" });
//   // }
// };

// const copyChat = async (req, res) => {
//   try {
//     // await Blog.deleteOne({ _id: req.params.id });
//     // res.status(204).send();
//   } catch {
//     res.status(400);
//     res.send({ error: "Cannot copy!" });
//   }
// };

// const forwardChat = async (req, res) => {
//   try {
//     // const blog = await Blog.findById(req.params.id);
//     // blog.isApproved = true;

//     // if (req.body.categoryList) blog.categoryList = req.body.categoryList;

//     // await blog.save();
//     // res.send(blog);
//   } catch {
//     res.status(400);
//     res.send({ error: "Cannot forward!" });
//   }
// };

module.exports = {
  searchUser
};
