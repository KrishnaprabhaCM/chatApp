const express = require("express");
const router = express.Router();
const {
  // createChat,
  // getChatByUserId,
  // getChatById,
  // deleteChat,
  // copyChat,
  // forwardChat
  searchUser, getMsg,
  activeUsers,
  blockUser,
  muteUser
} = require("../controllers/chatController");

router.post("/searchUser/:username", searchUser);
// router.post("/sendMessage/:username/:currentuser", sendMessage);
router.get("/getMsg/:username/:currentuser", getMsg);
router.get("/activeUsers/:username", activeUsers);
router.post("/blockUser/:username", blockUser);
router.post("/muteUser/:username", muteUser);
// router.get("/all", getChatByUserId);
// router.get("/:id", getChatById);
// router.patch("/approve/:id", deleteChat);
// router.patch("/:id", copyChat);
// router.delete("/:id", forwardChat);

module.exports = router;
