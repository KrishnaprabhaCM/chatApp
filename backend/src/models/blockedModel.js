const mongoose = require("mongoose");

const blkdUserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  blockedUserName: {
    type: String,
    required: true,
  },
  createdTime: {
    type: Date,
    default: Date.now(),
  }
});

module.exports = mongoose.model("blocked-users", blkdUserSchema);
