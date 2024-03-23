import React from "react";
import { Link } from "react-router-dom";
import add_product_icon from "../Assets/Admin Panel Assets/Product_Cart.svg";
import list_product_icon from "../Assets/Admin Panel Assets/Product_list_icon.svg";

const SideBar = () => {
  return (
    <div className="flex flex-col pt-[30px] gap-5 w-full h-screen bg-[#dad8d8] my-1 max-w-[250px]">
      <Link to="/addproduct">
        <div className="flex items-center justify-start my-0 mx-5 py-[5px] px-3 rounded-md bg-[#fff] gap-5">
          <img src={add_product_icon} alt="img" />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to="/listproduct">
        <div className="flex items-center justify-start my-0 mx-5 py-[5px] px-3 rounded-md bg-[#fff] gap-5">
          <img src={list_product_icon} alt="img" />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
};

export default SideBar;
