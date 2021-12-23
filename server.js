const app = require("./app");
const cloudinary = require("cloudinary").v2;

const connectDB = require("./config/db");

require("dotenv").config({ path: "./config.env" });

// Initialize database connection
connectDB();

// configure cloudinary for upload
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const port = process.env.PORT || 8000;

const server = app.listen(port, console.log(`Server running on port: ${port}`));

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);

  server.close(() => process.exit(1));
});
