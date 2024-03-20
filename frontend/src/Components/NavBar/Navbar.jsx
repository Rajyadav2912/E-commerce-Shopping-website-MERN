import React, { useContext, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import LoginSignup from "../../Pages/LoginSignup";

const Navbar = () => {
  const [menu, setMenu] = useState([]);
  const { getTotalCartItems } = useContext(ShopContext);

  const goToLogin = () => {
    <LoginSignup />;
  };

  return (
    <div className="fixed bg-white w-screen mx-auto flex justify-around xl:p-3 px-0 py-3 shadow-2xl z-50 ">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="xl:w-14 w-12" />
        <p className="xl:text-[35px] text-[28px] font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center list-none xl:gap-12 gap-10 text-[#626262] xl:text-[17px] text-[16px]">
        <li
          onClick={() => setMenu("shop")}
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
        >
          <Link to="/">Shop</Link>
          {menu === "shop" ? (
            <hr className="border-none w-[90%] h-[3px] rounded-md bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("men")}
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
        >
          <Link to="/mens">Men</Link>
          {menu === "men" ? (
            <hr className="border-none w-[90%] h-[3px] rounded-md bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("women")}
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
        >
          <Link to="/womens">Women</Link>
          {menu === "women" ? (
            <hr className="border-none w-[90%] h-[3px] rounded-md bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => setMenu("kids")}
          className="flex flex-col items-center justify-center gap-1 cursor-pointer"
        >
          <Link to="/kids"> Kids</Link>
          {menu === "kids" ? (
            <hr className="border-none w-[90%] h-[3px] rounded-md bg-[#FF4141]" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="flex items-center xl:gap-11 gap-9">
        <button
          className="w-[98px] h-[40px] text-[17px] border border-[#7a7a7a] rounded-[75px] font-medium xl:w-[115px] xl:h-[42px] xl:text-[18px]
        text-[#515151] cursor-pointer"
        >
          <Link to="/login">Login</Link>
        </button>
        <div className="relative flex">
          <Link to="/cart">
            <img src={cart_icon} alt="cart-icon" className="w-8" />
          </Link>
          <span className="absolute text-center left-6 -top-2 w-[21px] h-[21px] bg-red-500 rounded-[11px] text-white cursor-pointer">
            {getTotalCartItems()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
