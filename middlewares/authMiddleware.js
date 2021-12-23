const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/CustomError");

const { verifyToken } = require("../utils/jwt");

const authentication = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    try {
      token = req.headers.authorization.split("Bearer ")[1];
      const { id, role } = verifyToken(token);

      req.user = { id, role };
    } catch (error) {
      return next(
        new CustomError("Invalidd authentication. Please log in again.", 403)
      );
    }
  } else {
    return next(
      new CustomError("Invalidd authentication. Please log in again.", 403)
    );
  }

  next();
};

const authorization = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return next(new CustomError("Unauthorized to access this resource."));

    next();
  };
};

module.exports = { authentication, authorization };
