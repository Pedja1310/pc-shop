const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const errorHandleMiddleware = require("./middlewares/errorHandleMiddleware");
const CustomError = require("./utils/CustomError");

// ROUTERS
const authRouter = require("./routes/authRouter");
const productsRouter = require("./routes/productsRouter");
const userRouter = require("./routes/userRouter");
const ordersRouter = require("./routes/ordersRouter");

// CREATE EXPRESS APP
const app = express();

// MIDDLEWARE
app.use(morgan("dev"));
app.use(cors());
app.use(express.json({ limit: "1MB" }));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/products", productsRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/orders", ordersRouter);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

// app.all("*", (req, res, next) => {
//   next(new CustomError(`Route ${req.originalUrl} not found.`, 404));
// });

app.use(errorHandleMiddleware);

module.exports = app;
