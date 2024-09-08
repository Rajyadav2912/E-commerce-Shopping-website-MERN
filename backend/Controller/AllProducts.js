const Product = require("../Models/ProductModel");

const AllProducts = async (req, res) => {
  try {
    let products = await Product.find({});
    console.log("All Products Fetched Successfully", products);
    res.send(products);
  } catch (error) {
    console.log("Error fetching all products", error);
    res.status(500).send("Error fetching all products");
  }
};

module.exports = AllProducts;
