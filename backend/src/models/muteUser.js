const mongoose = require("mongoose");

const muteUserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  muteUserName: {
    type: String,
    required: true,
  },
  createdTime: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("mute-users", muteUserSchema);
