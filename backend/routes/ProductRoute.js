const express = require("express");
// const fetchUser = require("../Models/fetchUser");

const router = express.Router();

const { addProduct } = require("../Controller/AddProduct");
const { addToCart } = require("../Controller/AddToCart");
const { allProducts } = require("../Controller/AllProducts");
const { getCart } = require("../Controller/GetCart");
const { login } = require("../Controller/Login");
const { newCollection } = require("../Controller/NewCollection");
const { popularinwomen } = require("../Controller/PopularInWomen");
const { removeFromCart } = require("../Controller/RemoveFromCart");
const { removeProduct } = require("../Controller/RemoveProduct");
const { signup } = require("../Controller/SignUp");

// all api routes
// router.get("/allproducts", allProducts);
router.post("/addproduct", addProduct);
router.post("/removeproduct", removeProduct);
router.post("/signup", signup);
router.post("/login", login);
router.get("/newcollection", newCollection);
router.get("/popularinwomen", popularinwomen);
router.post("/addtocart", addToCart.fetchUser);
router.post("/removeFromcart", removeFromCart.fetchUser);
router.post("/getcart", getCart.fetchUser);

module.exports = router;
