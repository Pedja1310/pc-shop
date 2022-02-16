const express = require("express");

const { newPaymentIntent } = require("../controllers/ordersController");

const ordersRouter = express.Router();

ordersRouter.route("/newPaymentIntent").post(newPaymentIntent);

module.exports = ordersRouter;
