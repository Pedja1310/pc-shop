const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  uploadProductImage,
  updateProduct,
  deleteProduct,
} = require("../controllers/productsController");

const {
  authentication,
  authorization,
} = require("../middlewares/authMiddleware");

const productsRouter = express.Router();

productsRouter
  .route("/")
  .get(getAllProducts)
  .post(authentication, authorization("admin"), createProduct);

productsRouter
  .route("/uploadImage")
  .post(authentication, authorization("admin"), uploadProductImage);

productsRouter
  .route("/:id")
  .get(getSingleProduct)
  .patch(authentication, authorization("admin"), updateProduct)
  .delete(authentication, authorization("admin"), deleteProduct);

module.exports = productsRouter;
