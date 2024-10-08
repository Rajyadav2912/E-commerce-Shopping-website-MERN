const Users = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

const SignUp = async (req, res) => {
  try {
    let check = await Users.findOne({ email: req.body.email });

    // when we will not create abc@gmail.com they throw will error
    if (check) {
      return res.status(400).json({
        success: false,
        errors: "User is already exist with same email address",
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
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error, while sign-up" });
  }
};

module.exports = SignUp;
