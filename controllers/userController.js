const catchAsync = require("../utils/catchAsync");
const User = require("../models/User");
const CustomError = require("../utils/CustomError");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find({ role: "user" }).select("-password");

  res.status(200).json({ users });
});

exports.getSingleUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const user = await User.findById(id).select("-password");

  if (!user)
    return next(new CustomError(`User with id: ${id} not found.`, 404));

  res.status(200).json({ user });
});

exports.showCurrentUser = catchAsync(async (req, res, next) => {
  const { id } = req.user;

  const user = await User.findById(id).select("-password");

  if (!user) return next(new CustomError("Authentication invalid.", 403));

  res.status(200).json({ user });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  res.send("update user");
});

exports.updateUserPassword = catchAsync(async (req, res, next) => {
  const { oldPassword, newPassword, passwordConfirm } = req.body;
  const { id } = req.user;

  if (!oldPassword || !newPassword)
    return next(new CustomError("Please provide both passwords."));

  const user = await User.findById(id);

  if (!(await user.comparePasswords(oldPassword))) {
    return next(new CustomError("Invalid credentials."));
  }

  user.password = newPassword;
  user.passwordConfirm = passwordConfirm;

  await user.save();

  res.status(200).json({ message: "Password update successfull." });
});
