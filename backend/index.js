const express = require("express");
const jwt =require("jsonwebtoken");
const multer = require("multer");
const dotenv = require("dotenv").config();
const connectDB = require("../backend/src/config/db");
const port = process.env.PORT || 5000;
const cors = require("cors");
const app = express();
const nodemailer = require('nodemailer');

app.use(express.static('../backend/public'));
app.use(cors());
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const chatRouter = require("../backend/src/routes/chatRoutes");
app.use("/api/chat", chatRouter);

const userRouter = require("../backend/src/routes/userRoutes");
app.use("/api/user", userRouter);

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
