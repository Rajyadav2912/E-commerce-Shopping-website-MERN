import React from "react";
import { Link } from "react-router-dom";
import add_product_icon from "../Assets/Admin Panel Assets/Product_Cart.svg";
import list_product_icon from "../Assets/Admin Panel Assets/Product_list_icon.svg";

const SideBar = () => {
  return (
    <div className="flex lg:flex-col flex-row lg:justify-start justify-center lg:p-0 lg:pt-[30px] p-[30px] gap-5 w-full lg:h-screen h-[13vh] bg-[#dad8d8] my-1 lg:max-w-[250px] md:max-w-[760px] sm:max-w-[630px] max-w-[480px] lg:mx-0 mx-auto lg:rounded-none rounded-xl">
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
