const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
  fromUserName: {
    type: String,
    required: true,
  },
  toUserName: {
    type: String,
    required: true,
  },
  chatType: {
    type: String,
    required: true,
  },
  chatContent: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdTime: {
    type: Date,
    default: Date.now(),
  },
  flag: {
    type: [String],
    default: "0",
  },
});

module.exports = mongoose.model("Chat", chatSchema);
