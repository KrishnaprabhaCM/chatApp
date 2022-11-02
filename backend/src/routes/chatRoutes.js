const express = require("express");
const router = express.Router();
const {
  // createChat,
  // getChatByUserId,
  // getChatById,
  // deleteChat,
  // copyChat,
  // forwardChat
  searchUser
} = require("../controllers/chatController");

router.post("/searchUser/:username", searchUser);
// router.get("/all", getChatByUserId);
// router.get("/:id", getChatById);
// router.patch("/approve/:id", deleteChat);
// router.patch("/:id", copyChat);
// router.delete("/:id", forwardChat);

module.exports = router;
