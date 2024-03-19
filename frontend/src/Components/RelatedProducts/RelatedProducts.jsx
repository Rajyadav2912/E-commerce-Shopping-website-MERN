import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  return (
    <div className="flex flex-col items-center gap-3 h-[90vh]">
      <h1 className="text-[#171717] text-[50px] font-semibold">
        Telated Products
        <hr className="w-[200px] h-[6px] mx-auto rounded-xl bg-[#252525]" />
      </h1>
      <div className="flex mt-[30px] gap-[30px]">
        {data_product.map((item, index) => {
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
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
