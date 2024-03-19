import React from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = ({ product }) => {
  return (
    <div className="flex my-0 mx-[170px]">
      <div className="flex gap-[17px]">
        <div className="flex flex-col gap-4">
          <img src={product.image} alt="img" className="w-[200px] h-[163px]" />
          <img src={product.image} alt="img" className="w-[200px] h-[163px]" />
          <img src={product.image} alt="img" className="w-[200px] h-[163px]" />
          <img src={product.image} alt="img" className="w-[200px] h-[163px]" />
        </div>
        <div>
          <img src={product.image} alt="img" className="w-[850px] h-[700px]" />
        </div>
      </div>
      <div className="my-0 mx-[70px] flex flex-col">
        <h1 className="text-[#3d3d3d] text-[35px] font-bold">{product.name}</h1>
        <div className="flex items-center mt-[13px] gap-1 text-[#1c1c1c] text-[16px]">
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_icon} alt="star" />
          <img src={star_dull_icon} alt="star" />
          <p>(122)</p>
        </div>
        <div className="flex gap-[15px] my-[40px] mx-0 text-[24px] font-bold">
          <div className="text-[#4eff4e]">${product.new_price}</div>
          <div className="text-[#8c8c8c] line-through">
            ${product.old_price}
          </div>
        </div>
        <div>
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="mt-[40px] text-[#656565] text-[18px] font-semibold">
          <select className="border border-black rounded-lg px-1">
            <option>Select Size</option>
            <option value="S">S-Small</option>
            <option value="M">M-Medium</option>
            <option value="L">L-Large</option>
            <option value="XL">XL-Extra large</option>
            <option value="XXL">XXL-Ultra large</option>
          </select>
        </div>
        <button className="py-4 px-8 w-[200px] text-[16px] font-semibold text-[#fff] bg-[#FF4141] my-[20px] rounded-xl border-none outline-none">
          ADD TO CART
        </button>
        <p className="mt-[10px]">
          <span className="font-semibold">Category : </span> Women, T-Shirt,
          Crop Top
        </p>
        <p className="mt-[10px]">
          <span className="font-semibold">Tags: </span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
