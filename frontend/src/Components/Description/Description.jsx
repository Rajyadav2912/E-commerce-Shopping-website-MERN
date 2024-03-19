import React from "react";

const Description = () => {
  return (
    <div className="my-[120px] mx-[170px]">
      <div className="flex gap-5">
        <div className="flex items-center justify-center text-[16px] font-semibold w-[171px] h-[60px] border border-[#aaa9a9] ">
          Description
        </div>
        <div className="flex items-center justify-center text-[16px] font-semibold w-[171px] h-[60px] border border-[#aaa9a9] text-[#555] bg-[#FBFBFB] ">
          Reviews (122)
        </div>
      </div>
      <div className="flex flex-col gap-[25px] border border-[#D0D0D0] p-[48px] pb-[70px] mt-3">
        <p>
          An e-commerce website is an oline platform that faclitates the buying
          and selling of products or services over the internet. It serves as a
          virtual marketplace where business and individuals can showcase their
          products, interact with customers, and conduct transactions without
          the need for a physical presence. E-commerce website have gained
          immense popularity due to their convenience, accessibility, and the
          global reach they after.
        </p>
        <p>
          E-commerce websites typically display products or services along with
          detailed descriptions, images, prices, and any available variations
          (e.g., sizes, colors). Each product usually has its own dedicated page
          with relevant information.
        </p>
      </div>
    </div>
  );
};

export default Description;
