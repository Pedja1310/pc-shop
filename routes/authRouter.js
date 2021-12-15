const express = require("express");

const {
  userRegister,
  userLogin,
  userLogout,
} = require("../controllers/authController");

const authRouter = express.Router();

authRouter.route("/login").post(userLogin);
authRouter.route("/register").post(userRegister);
authRouter.route("/logout").get(userLogout);

module.exports = authRouter;
