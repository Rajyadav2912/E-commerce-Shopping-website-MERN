// import React, { useState } from "react";
import navlogo from "../Assets/Admin Panel Assets/nav-logo.svg";
import navProfile from "../Assets/Admin Panel Assets/nav-profile.svg";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={navlogo} alt="logo" className="nav-logo" />
      </Link>
      <img src={navProfile} alt="profile logo" className="navProfile" />
    </div>
  );
};

export default Navbar;
