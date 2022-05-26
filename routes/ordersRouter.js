const express = require("express");
const { authentication } = require("../middlewares/authMiddleware");

const { newPaymentIntent } = require("../controllers/ordersController");

const ordersRouter = express.Router();

ordersRouter.route("/newPaymentIntent").post(authentication, newPaymentIntent);

module.exports = ordersRouter;
