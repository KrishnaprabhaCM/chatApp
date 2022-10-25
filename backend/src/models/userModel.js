const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  otpVerified: {
    type: String,
    default: "0",
  },
  pwd: {
    type: String,
    required: true,
  },
  confPwd: {
    type: String,
    required: true,
  },
  creaedAt: {
    type: Date,
    default: Date.now(),
  },
  flag: {
    type: String,
    default: "0",
  },
});

module.exports = mongoose.model("user", userSchema);
