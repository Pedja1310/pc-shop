const fs = require("fs");
const Product = require("../models/Product");
const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/CustomError");
const cloudinary = require("cloudinary").v2;

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find().select(
    "title image price brand category"
  );

  if (!products)
    return next(
      new CustomError("Unable to find products. Please try again later.", 404)
    );

  res.status(200).json({ status: "success", products });
});

exports.getProductsBySearch = catchAsync(async (req, res, next) => {
  const { query, brand, category } = req.query;

  let queryClauses = [];

  if (query !== "none") {
    const searchQuery = new RegExp(query, "i");
    queryClauses.push({ title: searchQuery });
  }

  if (brand) {
    const brandValues = brand.split(",").map((item) => new RegExp(item, "i"));
    queryClauses.push({ brand: { $in: brandValues } });
  }

  if (category) {
    const categoryValues = category
      .split(",")
      .map((item) => new RegExp(item, "i"));
    queryClauses.push({ category: { $in: categoryValues } });
  }

  const products = await Product.find({
    $and: queryClauses,
  });

  res.status(200).json({ status: "success", products });
});

exports.getSingleProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findOne({ _id: req.params.id });

  if (!product) return next(new CustomError("Product not found.", 404));

  res.status(200).json({ status: "success", product });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({ status: "success", product });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const product = await Product.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) return next(new CustomError("Product not found.", 404));

  res.status(200).json({ status: "success", product });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { imageId } = req.body;

  const product = await Product.findOne({ _id: id });

  if (!product) return next(new CustomError("Product not found.", 404));

  await cloudinary.uploader.destroy(imageId);

  product.remove();

  res
    .status(200)
    .json({ status: "success", msg: "Product delete successfull." });
});

exports.handleProductImage = catchAsync(async (req, res, next) => {
  const { image } = req.files;

  if (req.body.previousImage) {
    await cloudinary.uploader.destroy(req.body.previousImage);
  }

  const { public_id, secure_url } = await cloudinary.uploader.upload(
    image.tempFilePath,
    {
      upload_preset: "pc-shop",
    }
  );

  fs.unlinkSync(image.tempFilePath);

  res.status(201).json({ status: "success", image: { public_id, secure_url } });
});
