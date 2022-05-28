const express = require("express");
const { authentication } = require("../middlewares/authMiddleware");

const {
  newPaymentIntent,
  createNewOrder,
} = require("../controllers/ordersController");

const ordersRouter = express.Router();

ordersRouter.route("/newPaymentIntent").post(authentication, newPaymentIntent);
ordersRouter.route("/").post(authentication, createNewOrder);

module.exports = ordersRouter;
