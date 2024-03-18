import React, { useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState([]);

  return (
    <div className="fixed bg-white w-screen mx-auto flex justify-around p-3 shadow-2xl">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-14" />
        <p className="text-[35px] font-semibold">SHOPPER</p>
      </div>
      <ul className="flex items-center list-none gap-12 text-[#626262] text-[17px]">
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
      <div className="flex items-center gap-11">
        <button
          className="w-[115px] h-[42px] border border-[#7a7a7a] rounded-[75px] text-[18px] font-medium 
        text-[#515151] cursor-pointer"
        >
          Login
        </button>
        <div className="relative flex">
          <Link to="/cart">
            <img src={cart_icon} alt="cart-icon" className="w-8" />
          </Link>
          <span className="absolute text-center left-6 -top-2 w-[21px] h-[21px] bg-red-500 rounded-[11px] text-white">
            0
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
