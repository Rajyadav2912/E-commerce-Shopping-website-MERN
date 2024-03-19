import React from "react";

const Item = ({ image, name, new_price, old_price }) => {
  return (
    <div className="w-[280px] hover:scale-105 duration-300">
      <img src={image} alt="" className="rounded-3xl hover:shadow-2xl" />
      <p className="my-[6px] mx-0 text-[15px] pl-2">{name}</p>
      <div className="flex gap-2 pl-2">
        <p className="text-[#4eff4e] text-[18px] font-semibold">${new_price}</p>
        <p className="text-[#8c8c8c] text-[18px] font-medium line-through">
          ${old_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
