const express = require("express");
const router = express.Router();
const {
  signup,
  allChatHandles,
  allExistingEmails,
  sendEmailOTP,
  getUserById,
  verifyOTP,
  login,
  createUserName,
  userActive,
  inactiveStatus
  // muteUser,
  // blockUser,
  // unmuteUser,
  // unblockUser
} = require("../controllers/userController");
const { route } = require("./userRoutes");


router.post("/login",login);
router.post("/signup/:otp",signup);
router.post("/allChatHandles",allChatHandles);
router.post("/allExistingEmails",allExistingEmails);
router.post("/sendEmailOTP/:otp",sendEmailOTP);
router.get("/getUserById/:userId",getUserById);
router.put("/verifyOTP",verifyOTP);
router.put("/createUserName/:userId",createUserName);
router.put("/userActive/:username",userActive);
router.put("/inactiveStatus/:username",inactiveStatus);
// router.post("/mute",muteUser);
// router.post("/block",blockUser);
// router.put("/unmute",unmuteUser);
// router.put("/unblock",unblockUser);
module.exports = router;
