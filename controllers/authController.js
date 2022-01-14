const catchAsync = require("../utils/catchAsync");
const { createToken } = require("../utils/jwt");

const User = require("../models/User");
const CustomError = require("../utils/CustomError");

exports.userRegister = catchAsync(async (req, res, next) => {
  const { email, username, password, passwordConfirm } = req.body;

  if (!email || !password || !username || !passwordConfirm)
    return next(new CustomError("Please provide email and password.", 400));

  const user = await User.create({
    email,
    username,
    password,
    passwordConfirm,
  });

  const token = createToken(user._id, user.role);

  res.status(200).json({
    message: "success",
    token,
    user: {
      email: user.email,
      username: user.username,
      role: user.role,
      orders: user.orders,
      wishlist: user.wishlist,
      shippingDetails: user.shippingDetails,
    },
  });
});

exports.userLogin = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password)
    return next(new CustomError("Please provide email and password.", 400));

  const user = await User.findOne({ email });

  if (!user || !(await user.comparePasswords(password)))
    return next(new CustomError("Please provide email and password.", 400));

  const token = createToken(user._id, user.role);

  res.status(200).json({
    status: "success",
    token,
    user: {
      email: user.email,
      username: user.username,
      role: user.role,
      orders: user.orders,
      wishlist: user.wishlist,
      shippingDetails: user.shippingDetails,
    },
  });
});

exports.userLogout = catchAsync(async (req, res, next) => {
  res.send("User logout");
});
