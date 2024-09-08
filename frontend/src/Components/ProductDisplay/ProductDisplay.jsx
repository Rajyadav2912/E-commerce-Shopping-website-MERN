import React, { useContext } from "react";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { ToastContainer } from "react-toastify";

const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="flex lg:flex-row flex-col my-0 xl:mx-[170px] lg:mx-[70px] md:mx-[100px] mx-[70px] gap-8">
      <ToastContainer position="top-center" />
      <div className="flex sm:flex-row flex-col-reverse gap-[17px]">
        <div className="flex justify-between sm:flex-col flex-row sm:gap-4 gap-2">
          <img
            src={product.imageURL}
            alt="img"
            className="lg:w-[200px] sm:w-[170px] w-[60px] lg:h-[163px] h-[147.5px]"
            loading="lazy"
          />
          <img
            src={product.imageURL}
            alt="img"
            className="lg:w-[200px] sm:w-[170px] w-[60px] lg:h-[163px] h-[147.5px]"
            loading="lazy"
          />
          <img
            src={product.imageURL}
            alt="img"
            className="lg:w-[200px] sm:w-[170px] w-[60px] lg:h-[163px] h-[147.5px]"
            loading="lazy"
          />
          <img
            src={product.imageURL}
            alt="img"
            className="lg:w-[200px] sm:w-[170px] w-[60px] lg:h-[163px] h-[147.5px]"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src={product.imageURL}
            alt="img"
            className="lg:w-[850px] w-[800px] lg:h-[700px] h-[640px]"
            loading="lazy"
          />
        </div>
      </div>
      <div className="my-0 lg:mx-[70px] mx-0 flex flex-col">
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
          <div className="text-[#8c8c8c] line-through">
            ${product.old_price}
          </div>
          <div className="text-[#ff4e4e]">${product.new_price}</div>
        </div>
        <div>
          A lightweight, usually knitted, pullover shirt, close-fitting and with
          a round neckline and short sleeves, worn as an undershirt or outer
          garment.
        </div>
        <div className="mt-[40px] text-[#656565] text-[18px] font-semibold">
          <select className=" rounded-lg px-1">
            <option>Select Size</option>
            <option value="S">S-Small</option>
            <option value="M">M-Medium</option>
            <option value="L">L-Large</option>
            <option value="XL">XL-Extra large</option>
            <option value="XXL">XXL-Ultra large</option>
          </select>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="py-4 px-8 w-[200px] text-[16px] font-semibold text-[#fff] bg-[#FF4141] my-[20px] rounded-xl border-none outline-none"
        >
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
