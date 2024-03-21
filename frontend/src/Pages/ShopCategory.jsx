import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="block py-[100px] mx-auto w-[82%]">
      <img src={banner} alt="" />
      <div className="flex my-0 justify-between items-center">
        <p className="font-semibold">
          <span>Showing 1-12</span>
          out of 36 products
        </p>
        <div className="flex items-center gap-2 mt-4 py-[10px] px-[20px] rounded-[40px] border border-[#888]">
          Sort by <img src={dropdown_icon} alt="" className="w-[15px] h-2" />
        </div>
      </div>
      <div className="my-[20px] h-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-items-center md:gap-x-3 gap-x-5 gap-12">
        {all_product.map((item, index) => {
          if (category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div
        className="flex justify-center items-center mt-[150px] mx-auto w-[233px] h-[69px] 
        rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-medium"
      >
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
