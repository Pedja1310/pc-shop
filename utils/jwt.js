const jwt = require("jsonwebtoken");

exports.createToken = (id, role, email) => {
  console.log(email);
  return jwt.sign({ id, role, email }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXP,
  });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
