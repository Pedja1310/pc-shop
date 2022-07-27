const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    total: {
      price: {
        type: Number,
        required: true,
      },
      currency: {
        type: String,
        required: true,
      },
    },
    shippingDetails: {
      country: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      address: {
        type: String,
        required: true,
        trim: true,
      },
      postalCode: {
        type: String,
        required: true,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

// Populate products on document save
OrderSchema.pre("save", function (next) {
  this.populate("products.product", "_id title price image")
    .then(() => this.populate("user", "username email"))
    .then(() => next());
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
