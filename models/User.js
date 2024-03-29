const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: validator.isEmail,
        message: "Valid email is required.",
      },
      immutable: [true, "Email cannot be changed."],
    },
    username: {
      type: String,
      trim: true,
      required: [true, "Username is required."],
      minlength: [4, "Username must be between 4 and 20 characters."],
      maxlength: [20, "Username must be between 4 and 20 characters."],
    },
    password: {
      type: String,
      required: [true, "Password is required."],
      trim: true,
      minlength: [6, "Password must be between 6 and 12 characters long."],
      maxlength: [12, "Password must be between 6 and 12 characters long."],
    },
    passwordConfirm: {
      type: String,
      trim: true,
      required: [true, "Password confirmation is required."],
      validate: {
        validator: function (passwordConfirm) {
          return passwordConfirm === this.password;
        },
        message: "Passwords do not match.",
      },
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    // orders: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Order",
    //   },
    // ],
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    shippingDetails: {
      country: {
        type: String,
        default: "",
      },
      city: {
        type: String,
        trim: true,
        default: "",
      },
      postalCode: {
        type: String,
        trim: true,
        default: "",
      },
      address: {
        type: String,
        trim: true,
        default: "",
      },
    },
  },
  { toJSON: { virtuals: true } }
);

// Hash password
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  this.passwordConfirm = undefined;

  next();
});

// Compare passwords on auth
UserSchema.methods.comparePasswords = async function (loginPassword) {
  return await bcrypt.compare(loginPassword, this.password);
};

// Create virutal field with user's orders
UserSchema.virtual("orders", {
  ref: "Order",
  foreignField: "user",
  localField: "_id",
});

// TODO find better solution for wishlist toggle
// Populate user wishlist middleware
const populateUserWishlist = function (next) {
  this.populate("wishlist", "_id title price image");
  next();
};

const populateUserOrders = function (next) {
  this.populate({
    path: "orders",
    options: { sort: { createdAt: -1 } },
    populate: { path: "products.product" },
  });
  next();
};

// Populate user wishlist on query
UserSchema.pre(/^find/, populateUserWishlist);
UserSchema.pre(/^find/, populateUserOrders);

// Populate user wishlist on document save
UserSchema.post("save", function (doc, next) {
  doc.populate("wishlist", "_id title price image").then(() => next());
});

const User = mongoose.model("User", UserSchema);

// UserSchema.set("toObject", { virtuals: true });
UserSchema.set("toJSON", { virtuals: true });

module.exports = User;
