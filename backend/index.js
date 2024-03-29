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
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage: storage });

app.use("/images", express.static("upload/images"));

// creating Uploade endpoint for image
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    image: `http://localhost:${PORT}/images/${req.file.filename}`,
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
  image: {
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
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });

  console.log(product);
  await product.save();

  console.log("Saved");

  res.json({
    success: true,
    name: req.body.name,
  });
});

// Creating API For deleting products
app.post("/removeproduct", async (req, res) => {
  await Product.findOneAndDelete({ id: req.body.id });
  console.log("Removed product");
  res.status(200).json({
    success: true,
    name: req.body.name,
    id: req.body.id,
  });
});

// Creating API For getting all products
app.get("/api/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched Successfully", products);
  res.send(products);
});

// Schema Creation for User model
const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  cartData: {
    type: Object,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// Creation Ending Point for regiteration the user
app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });

  // when we will not create abc@gmail.com they throw will error
  if (check) {
    return res.status(400).json({
      success: false,
      errors: "existing user found with same email address",
    });
  }

  let cart = {};
  for (let i = 0; i < 300; i++) {
    cart[i] = 0;
  }

  const user = new Users({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    cartData: cart,
  });

  await user.save();

  const data = {
    user: {
      id: user.id,
    },
  };

  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

// creating a endpoint for user login
app.post("/login", async (req, res) => {
  let user = await Users.findOne({ email: req.body.email });

  // when we have user email id then we need to check if user emailId and password is correct or not
  if (user) {
    const passCompare = req.body.password === user.password;
    // if correct then genreated Json Web Token
    if (passCompare) {
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, "secret_ecom");
      res.json({ success: true, token });
    }
    // not correct then to show password is wrong
    else {
      res.status(400).json({
        success: false,
        errors: "Wrong Password",
      });
    }
  }
  // when this is not exist in our server then to show User not found
  else {
    res.status(400).json({
      success: false,
      errors: "User not found",
    });
  }
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running on port" + PORT);
  } else {
    console.log("Error : " + error);
  }
});
