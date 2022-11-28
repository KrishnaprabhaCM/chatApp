const Chat = require("../models/chatModel");
const User = require("../models/userModel");
const Blocked = require("../models/blockedModel");
const Mute = require("../models/muteUser");

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

const getMsg = async (req, res) => {
  try {
    from = req.params.currentuser;
    to = req.params.username;
    const chat = await Chat.find({
      $or:[
        {$and:[
        { fromUserName:from},{ toUserName:to}
      ]},
      {$and:[
        { toUserName:from},{fromUserName:to}
      ]}
      ]
    });
    res.status(200).json(chat);
  } catch(err) {
    console.log(err);
    res.send({ error: "User doesn't exist!" });
  }
};

const activeUsers = async (req, res) => {
  try {
    // user = req.params.username;
    const activeUsers = await User.find({status:"1"});
    res.status(200).json(activeUsers);
  } catch(err) {
    console.log(err);
    res.send({ error: "Cannot get active users!" });
  }
};

const blockUser = async (req,res) => {
  try{
    username = req.params.username;
    currentuser = req.body.currentuser;
    const blokeUser = await Blocked.create({
      userName:currentuser,
      blockedUserName:username,
    })
    res.status(201).send(blokeUser);
  }
  catch(err){
    console.log(err);
  }
}

const muteUser = async (req,res) => {
  try{
    username = req.params.username;
    currentuser = req.body.currentuser;
    const blokeUser = await Mute.create({
      userName:currentuser,
      muteUserName:username,
    })
    res.status(201).send(blokeUser);
  }
  catch(err){
    console.log(err);
  }
}

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
  searchUser,getMsg,
  activeUsers,blockUser,
  muteUser
};
