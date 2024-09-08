const Product = require("../Models/ProductModel");

const PopularInWomen = async (req, res) => {
  try {
    let products = await Product.find({ category: "women" });

    let popularinwomen = products.slice(0, 4);
    console.log("Popular in Women Fetched");

    res.send(popularinwomen);
  } catch (error) {
    console.log("Error in fetching popular in women products", error);
    res
      .status(500)
      .send({ message: "Error in fetching popular in women products" });
  }
};

module.exports = PopularInWomen;
