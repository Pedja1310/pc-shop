const app = require("./app");

const connectDB = require("./config/db");

require("dotenv").config({ path: "./config.env" });

// Initialize database connection
connectDB();

const port = process.env.PORT || 8000;

const server = app.listen(port, console.log(`Server running on port: ${port}`));

process.on("uncaughtException", (err) => {
  console.log(err.name, err.message);

  server.close(() => process.exit(1));
});
