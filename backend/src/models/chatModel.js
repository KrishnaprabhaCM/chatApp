const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  fromUserName: {
    type: String,
    // required: true,
  },
  toUserName: {
    type: String,
    // required: true,
  },
  // chatType: {
  //   type: String,
  //   required: true,
  // },
  chatContent: {
    type: String,
    // required: true,
  },
  image:{
    type:String
  },
  // isRead: {
  //   type: Boolean,
  //   default: false,
  // },
  createdTime: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("Chat", chatSchema);
