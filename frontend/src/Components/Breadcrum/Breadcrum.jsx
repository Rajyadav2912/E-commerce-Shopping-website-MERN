import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
// import product from "../Pages/Product";

const Breadcrum = ({ product }) => {
  return (
    // flex items-center
    <div className="flex items-center ml-[170px] mb-3 gap-2">
      HOME <img src={arrow_icon} alt="icon" />
      SHOP <img src={arrow_icon} alt="icon" />
      {product.category} <img src={arrow_icon} alt="icon" />
      {product.name} <img src={arrow_icon} alt="icon" />
    </div>
  );
};

export default Breadcrum;