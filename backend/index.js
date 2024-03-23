const express = require("express");
const app = express();

// load .env configuration
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// const PORT = 4000;

const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//mongodb+srv://<username>:<password>@cluster1.gbpdyqa.mongodb.net/
// DATABASE connetions with MongoDB
mongoose
  .connect(process.env.DATABASE_URL)
  .then(console.log("DB connection Successfull"))
  .catch((error) => {
    console.log("DB Facing Connection Issues");
    console.error(error);
    process.exit(1);
  });

// API Creation

app.get("/", (req, res) => {
  res.send(`Express APP is Running PORT No. ${PORT} successfully`);
});

// Image storage Engine
const storage = multer.diskStorage({
  destination: "./upload/images/",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname} _${Date.now()} ${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

// creating Uploade endpoint for image
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`,
  });
});

// Schema for Creating a Product
const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/addproduct", async (req, res) => {
  let products = await Product.find({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else {
    id = 1;
  }

  const product = new Product({
    id: id,
    name: req.body.name,
    image_url: req.body.image_url,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  console.log(product);
  await product.save();
  console.log("Saved");
  res.status(200).json({
    success: true,
    name: req.body.name,
  });
});

// Creating API For deleting products
app.post("/removeproduct", async (req, res) => {
  const id = req.body.id;

  await Product.findOneAndDelete(id);
  console.log("Removed product");
  res.status(200).json({
    success: true,
    name: req.body.name,
    id: id,
  });
});

// Creating API For getting all products
app.get("/api/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched Successfully", products);
  res.send(products);
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running on port" + PORT);
  } else {
    console.log("Error : " + error);
  }
});
