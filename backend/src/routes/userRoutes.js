const express = require("express");
const router = express.Router();
const {
  // login,
  signup,
  allChatHandles,
  allExistingEmails,
  // getUserDataById,
  // muteUser,
  // blockUser,
  // unmuteUser,
  // unblockUser
} = require("../controllers/userController");
const { route } = require("./userRoutes");


// router.get("/",login);
router.post("/signup",signup);
router.post("/allChatHandles",allChatHandles);
router.post("/allExistingEmails",allExistingEmails);
// router.get("/getUser",getUserDataById);
// router.post("/mute",muteUser);
// router.post("/block",blockUser);
// router.put("/unmute",unmuteUser);
// router.put("/unblock",unblockUser);
module.exports = router;
