import React, { useContext, useRef, useState } from "react";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "../NavBar/Navbar.css";
import { IoIosArrowDropup } from "react-icons/io";

const Navbar = () => {
  const [menu, setMenu] = useState([]);
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const menuIcon_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-logo">
          <img src={logo} alt="logo" loading="lazy" />
          <p>SHOPPER</p>
        </div>
      </Link>
      <IoIosArrowDropup onClick={menuIcon_toggle} className="menu-icon" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/mens">Men</Link>
          {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="/womens">Women</Link>
          {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="/kids"> Kids</Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {/* when we have auth-token in localstorage then show Logout and if not have then Login*/}
        {localStorage.getItem("auth-token") ? (
          <>
            <button
              className="w-full h-[42px] px-2 rounded-[75px] border border-[#343333] hover:bg-[#c4c4c4] transition-all ease-linear hover:scale-[1.1] font-medium text-[15px]"
              onClick={() => {
                localStorage.removeItem("auth-token");
                window.location.replace("/");
              }}
            >
              Logout
            </button>

            <Link to="/cart">
              <img src={cart_icon} alt="cart-icon" />
            </Link>
            <span>{getTotalCartItems()}</span>
          </>
        ) : (
          <Link to="/login">
            <button className="w-full h-[42px] px-4 rounded-[75px] border border-[#343333] hover:bg-[#c4c4c4] transition-all ease-linear hover:scale-[1.1] font-medium text-[15px]">
              Login/Register
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
