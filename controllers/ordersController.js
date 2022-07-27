require("dotenv").config({ path: `${__dirname}/../.env` });

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Product = require("../models/Product");
const Order = require("../models/Order");
const User = require("../models/User");
const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/CustomError");

// TODO: Optimize
const calculateTotal = async (cart) => {
  const prices = await Promise.all(
    cart.map(async (item) => {
      const prod = await Product.findById(item._id);
      return prod.price * item.quantity;
    })
  );

  let total = prices.reduce((prev, curr) => prev + curr, 0);

  return total;
};

exports.newPaymentIntent = catchAsync(async (req, res) => {
  const { currency, cart } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: await calculateTotal(cart),
    currency,
    automatic_payment_methods: {
      enabled: false,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.createNewOrder = catchAsync(async (req, res) => {
  const { id } = req.user;

  const newOrder = await Order.create({ user: id, ...req.body });

  const user = await User.findById(id);

  res.status(200).json({ status: "success", data: { user, id: newOrder._id } });
});
