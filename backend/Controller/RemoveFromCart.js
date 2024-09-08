const Users = require("../Models/UserModel");

const RemoveFromCart = async (req, res) => {
  try {
    let userData = await Users.findOne({ _id: req.user.id });
    if (userData.cartData[req.body.itemId] > 0)
      userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate(
      { _id: req.user.id },
      { cartData: userData.cartData }
    );
    res.send("Removed product");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error, while removing product from cart"); 
  }
};

module.exports = RemoveFromCart;
