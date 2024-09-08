const express = require('express');
const router = express.Router();
const Users = require("../Models/UserModel");
const fetchUser = require("../Models/fetchUser")

// Import Controller
const getAllProducts = require("../Controller/AllProducts");
const addProducts = require("../Controller/AddProduct");
const removedProducts = require("../Controller/RemoveProduct");
// const 
const newCollection = require("../Controller/NewCollection");
const PopularInWomen = require("../Controller/PopularInWomen");

// Login
const Login = require("../Controller/Login");
const addToCart = require("../Controller/AddToCart");
const removeProCart = require("../Controller/RemoveFromCart");
const getCart = require("../Controller/GetCart");
const SignUp = require('../Controller/SignUp');

// routes
router.get("/allproducts", getAllProducts);
router.post("/addproduct", addProducts);
router.post("/removeproduct", removedProducts);
router.get("/newcollection", newCollection);
router.get("/popularinwomen", PopularInWomen);

// Login
router.post("/login",Login);
router.post("/signup", SignUp);

router.post("/addtocart", fetchUser, addToCart);
router.post("/removeFromcart", fetchUser, removeProCart);
router.post("/getcart", fetchUser, getCart);

module.exports = router;