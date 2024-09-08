const Product = require("../Models/ProductModel");

const NewCollection = async (req, res) => {
  try {
    let products = await Product.find({});

    let newcollection = products.slice(1).slice(-8);
    console.log("NewCollection Fetched");

    res.send(newcollection);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message:"Server Error, while fetching new collection",
    });
  }
};

module.exports = NewCollection;
