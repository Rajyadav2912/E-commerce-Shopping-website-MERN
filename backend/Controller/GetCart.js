const Users = require("../Models/UserModel");
// const fetchUser = require("../Models/fetchUser");

const GetCart = async (req, res) => {
  try {
    console.log("get cart");

    let userData = await Users.findOne({ _id: req.user.id });
    res.json(userData.cartData);
  } catch (error) {
    res.status(404).send("Error while fetching get cart");
  }
};

module.exports = GetCart;
