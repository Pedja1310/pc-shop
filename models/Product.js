const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product name is required."],
    trim: true,
    maxlength: [100, "Product name should not be longer than 100 characters."],
  },
  description: {
    type: String,
    required: [true, "Product description is required."],
    trim: true,
    maxlength: [
      2000,
      "Product description should not be longer than 2000 characters.",
    ],
  },
  brand: {
    type: String,
    required: [true, "Product brand is required."],
    trim: true,
    maxlength: [
      100,
      "Product brand name should not be longer than 100 characters.",
    ],
  },
  price: {
    type: Number,
    required: [true, "Product price is required."],
  },
  category: {
    type: String,
    required: [true, "Product category is required."],
  },
  image: {
    type: String,
    required: [true, "Product image is required."],
    default:
      "https://www.sisega.com.mx/wp-content/uploads/2016/08/ef3-placeholder-image.jpg",
  },
  inStock: {
    type: Number,
    required: [true, "Product quantity in stock is required."],
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
