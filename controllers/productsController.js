const fs = require("fs");
const Product = require("../models/Product");
const catchAsync = require("../utils/catchAsync");
const CustomError = require("../utils/CustomError");
const cloudinary = require("cloudinary").v2;

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const products = await Product.find().select(
    "title image price brand category"
  );

  res.status(200).json({ status: "success", products });
});

exports.getSingleProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findOne({ _id: req.params.id });

  if (!product) return next(new CustomError("Product not found.", 404));

  res.status(200).json({ status: "success", product });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  console.log(imageUploadResponse);
  // const product = await Product.create(req.body);
  res.status(201).json({ status: "success", message: "it works" });
});

exports.handleProductImage = catchAsync(async (req, res, next) => {
  const { image } = req.files;

  // console.log(req.body, req.files);

  const imageUploadResponse = await cloudinary.uploader.upload(
    image.tempFilePath,
    {
      upload_preset: "pc-shop",
    }
  );

  fs.unlinkSync(image.tempFilePath);

  res.status(201).json({ status: "success", imageUploadResponse });
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

  const product = await Product.findOne({ _id: id });

  if (!product) return next(new CustomError("Product not found.", 404));

  product.remove();

  res
    .status(200)
    .json({ status: "success", msg: "Product delete successfull." });
});
