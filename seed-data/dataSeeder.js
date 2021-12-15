const Product = require("../models/Product");
const data = require("./data");
const connectDB = require("../config/db");

require("dotenv").config({ path: `${__dirname}/../config.env` });

connectDB();

seedData = async () => {
  try {
    await Product.deleteMany();

    await Product.insertMany(data);

    console.log("Data imported.");

    process.exit(1);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await Product.deleteMany();

    console.log("Data removed.");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  seedData();
} else {
  deleteData();
}
