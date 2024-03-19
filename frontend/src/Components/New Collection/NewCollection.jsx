import React from "react";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
  return (
    <div className="flex flex-col items-center gap-[10px] my-14">
      <h1 className="flex flex-col items-center text-[#171717] text-[50px] font-semibold uppercase">
        NEW Collections
        <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] " />
      </h1>
      <div className="grid grid-cols-4 mt-[30px] gap-[30px]">
        {/* <div className="w-[90%] grid grid-cols-4 mt-[30px] gap-[40px]"> */}
        {new_collection.map((item, index) => (
          <Item
            key={index}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default NewCollection;
