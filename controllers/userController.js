const mongoose = require("mongoose");
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
  const { id } = req.user;

  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  }).populate("wishlist", "_id title price image");

  if (!user) return next(new CustomError("User not found.", 404));

  res.status(200).json({ status: "success", user });
});

// TODO update adding and removing items with $push and $pull
exports.updateUserWishlist = catchAsync(async (req, res, next) => {
  const { productId } = req.body;

  const user = await User.findById(req.params.id);

  const index = user.wishlist
    .map(({ _id }) => _id)
    .findIndex((item) => {
      return String(item) === productId;
    });

  if (index == "-1") {
    user.wishlist.push(productId);
  } else {
    user.wishlist = user.wishlist.filter(
      (item) => String(item._id) !== productId
    );
  }

  await user.save({ validateBeforeSave: false });

  res.status(200).json({ message: "success", user });
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
