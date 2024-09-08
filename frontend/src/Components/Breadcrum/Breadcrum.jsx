import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
// import product from "../Pages/Product";

const Breadcrum = ({ product }) => {
  return (
    // flex items-center
    <div className="flex items-center xl:ml-[170px] lg:ml-[55px] md:ml-[80px] sm:ml-[50px] ml-[30px] mb-3 gap-2 lg:text-[18px] md:text-[16px] sm:text-[15px] text-[11px]">
      HOME <img src={arrow_icon} alt="icon" loading="lazy" />
      SHOP <img src={arrow_icon} alt="icon" loading="lazy" />
      {product.category} <img src={arrow_icon} alt="icon" loading="lazy" />
      {product.name} <img src={arrow_icon} alt="icon" loading="lazy" />
    </div>
  );
};

export default Breadcrum;
