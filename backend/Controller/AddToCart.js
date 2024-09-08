const Users = require("../Models/UserModel");
// const fetchUser = require("../Models/fetchUser");

const AddToCart = async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send("Added product");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error, while product add to cart");
  }
};

module.exports = AddToCart;
