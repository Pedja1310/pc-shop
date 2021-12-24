const express = require("express");
const {
  getAllProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  handleProductImage,
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
  .route("/handleProductImage")
  .post(authentication, authorization("admin"), handleProductImage);

productsRouter
  .route("/:id")
  .get(getSingleProduct)
  .patch(authentication, authorization("admin"), updateProduct)
  .delete(authentication, authorization("admin"), deleteProduct);

module.exports = productsRouter;
