const CustomError = require("../utils/CustomError");

const sendDevError = (err, res) => {
  // send all error details in development mode
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendProdError = (err, res) => {
  // trusted error, send details to client in production
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error(err);
    // Unknown error, don't send details to client in production
    res.status(500).json({ status: "error", message: "Something went wrong." });
  }
};

const handleCastError = (err) => {
  return new CustomError(`Invalid ${err.path}: ${err.value}`, 400);
};

const handleDuplicateFieldsError = (err) => {
  const value = err.message.match(/(?<=(["']))(?:(?=(\\?))\2.)*?(?=\1)/)[0];

  return new CustomError(
    `Duplicate field value: ${value}. Please use another value.`,
    400
  );
};

const handleValidationError = (err) => {
  let validationErrors = Object.values(err.errors)
    .map((item) => item.message)
    .join(" ");

  return new CustomError(`${validationErrors}`, 400);
};

const errorHandleMiddleware = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendDevError(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = err;

    if (err.code === 11000) error = handleDuplicateFieldsError(error);
    if (err.name === "CastError") error = handleCastError(error);
    if (err.name === "ValidationError") error = handleValidationError(error);

    sendProdError(error, res);
  }
};

module.exports = errorHandleMiddleware;
