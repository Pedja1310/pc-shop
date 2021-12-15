const express = require("express");
const {
  getAllUsers,
  showCurrentUser,
  getSingleUser,
  updateUser,
  updateUserPassword,
} = require("../controllers/userController");
const {
  authentication,
  authorization,
} = require("../middlewares/authMiddleware");

const userRouter = express.Router();

userRouter.route("/").get(authentication, authorization("admin"), getAllUsers);
userRouter.route("/showMe").get(authentication, showCurrentUser);
userRouter
  .route("/updateUserPassword")
  .patch(authentication, updateUserPassword);
userRouter.route("/updateUser").patch(authentication, updateUser);
userRouter.route("/:id").get(authentication, getSingleUser);

module.exports = userRouter;
