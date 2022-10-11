const Chat = require("../models/chatModel");

const createChat = async (req, res) => {
  try {
    const newChat = await Chat.create({
      fromUserName: req.body.fromUserName,
      toUserName: req.body.toUserName,
      chatType: req.body.chatType,
      chatContent: req.body.chatContent
    });
    res.status(201).json(newChat);
  } catch (err) {
    res.status(400).send("Cannot create the chat");
  }
};

const getChatByUserId = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    res.status(200).json(chat);
  } catch {
    res.status(400);
    res.send({ error: "User doesn't exist!" });
  }
};

const getChatById = async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    res.status(200).json(chat);
  } catch {
    res.status(400);
    res.send({ error: "Cannot get chat" });
  }
};

const deleteChat = async (req, res) => {
  try {
    await Chat.deleteOne({ _id: req.params.id });
    res.status(204).send();
  } catch {
    res.status(400);
    res.send({ error: "Chat doesn't exist!" });
  }
  // try {
  //   const blog = await Blog.findById(req.params.id);

  //   if (req.body.title) blog.title = req.body.title;

  //   if (req.body.blogBody) blog.blogBody = req.body.blogBody;

  //   await blog.save();
  //   res.send(blog);
  // } catch {
  //   res.status(404);
  //   res.send({ error: "Blog doesn't exist!" });
  // }
};

const copyChat = async (req, res) => {
  try {
    // await Blog.deleteOne({ _id: req.params.id });
    // res.status(204).send();
  } catch {
    res.status(400);
    res.send({ error: "Cannot copy!" });
  }
};

const forwardChat = async (req, res) => {
  try {
    // const blog = await Blog.findById(req.params.id);
    // blog.isApproved = true;

    // if (req.body.categoryList) blog.categoryList = req.body.categoryList;

    // await blog.save();
    // res.send(blog);
  } catch {
    res.status(400);
    res.send({ error: "Cannot forward!" });
  }
};

module.exports = {
  createChat,
  getChatByUserId,
  getChatById,
  deleteChat,
  copyChat,
  forwardChat,
};
