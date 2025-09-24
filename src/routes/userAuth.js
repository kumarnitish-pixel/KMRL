const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/login", loginUser);
authRouter.post("/register", registerUser); // only for testing

module.exports = authRouter;
