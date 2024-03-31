const express = require("express");
const app = express();

// load .env configuration
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// const PORT = 4000;

const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

const Product = require("./Models/ProductModel");
const Users = require("./Models/UserModel");
const fetchUser = require("./Models/fetchUser");


// import routes
// const AllRoutes = require("./routes/ProductRoute");

// app.use("/api/v1", AllRoutes);

// DATABASE connetions with MongoDB
const connect = require("./Config/database");

connect();

// API Creation

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

app.post("/addproduct", async (req, res) => {
  try {
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
      message: "Product saved successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error,
      message: "Something went wrong",
    });
  }
});

// Creating API For deleting products
app.post("/removeproduct", async (req, res) => {
  try {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed product");
    res.status(200).json({
      success: true,
      name: req.body.name,
      id: req.body.id,
      message: "Product removed successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      error: error,
      message: "Something went wrong",
    });
  }
});

// Creating API For getting all products
app.get("/api/v1/allproducts", async (req, res) => {
  let products = await Product.find({});
  console.log("All Products Fetched Successfully", products);
  res.send(products);
});

// Schema Creation for User model

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

// creating endpoint for newcollection data
app.get("/newcollection", async (req, res) => {
  let products = await Product.find({});

  let newcollection = products.slice(1).slice(-8);
  console.log("NewCollection Fetched");

  res.send(newcollection);
});

// creating endpoint for popular in women section
app.get("/popularinwomen", async (req, res) => {
  let products = await Product.find({ category: "women" });

  let popularinwomen = products.slice(0, 4);
  console.log("Popular in Women Fetched");

  res.send(popularinwomen);
});

// creating middleware to fetch user
// const fetchUser = async (req, res, next) => {
//   const token = req.header("auth-token");

//   if (!token) {
//     res
//       .status(401)
//       .send({ errors: "Please authenticate using the valid token" });
//   } else {
//     try {
//       const data = jwt.verify(token, "secret_ecom");
//       req.user = data.user;
//       next();
//     } catch (error) {
//       res
//         .status(401)
//         .send({ errors: "Please authenticate using the valid token" });
//     }
//   }
// };

// creating endpoint for adding product in cart data
app.post("/addtocart", fetchUser, async (req, res) => {
  console.log(req.body, req.user);

  let userData = await Users.findOne({ _id: req.user.id });
  userData.cartData[req.body.itemId] += 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Added product");
});

app.post("/removeFromcart", fetchUser, async (req, res) => {
  console.log(req.body, req.user);

  let userData = await Users.findOne({ _id: req.user.id });
  if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
  await Users.findOneAndUpdate(
    { _id: req.user.id },
    { cartData: userData.cartData }
  );
  res.send("Removed product");
});

// creating endpoint to get cart data
app.post("/getcart", fetchUser, async (req, res) => {
  console.log("get cart");

  let userData = await Users.findOne({ _id: req.user.id });
  res.json(userData.cartData);
});

app.get("/", (req, res) => {
  res.send(`Express APP is Running PORT No. ${PORT} successfully`);
});

app.listen(PORT, (error) => {
  if (!error) {
    console.log("Server is running on port" + PORT);
  } else {
    console.log("Error : " + error);
  }
});
