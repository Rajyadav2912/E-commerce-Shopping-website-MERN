import React from "react";

const Item = ({ image, name, new_price, old_price }) => {
  return (
    <div className="item w-[350px] hover:scale-105 duration-300">
      <img src={image} alt="" />
      <p className="my-[6px] mx-0 ">{name}</p>
      <div className="flex gap-3">
        <p className="text-[#374151] text-[18px] font-semibold">${new_price}</p>
        <p className="text-[#8c8c8c] text-[18px] font-medium line-through">
          ${old_price}
        </p>
      </div>
    </div>
  );
};

export default Item;
