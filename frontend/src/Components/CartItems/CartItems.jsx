import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ToastContainer } from "react-toastify";

const CartItems = () => {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="xl:my-[50px] md:mt-8 sm:mt-4 mt-2 xl:mx-[170px] lg:mx-[100px] md:mx-[80px] sm:mx-[60px] mx-[50px]">
      <div className="flex w-full lg:overflow-x-hidden overflow-x-scroll items-center :lg:gap-16 gap-12 py-5 px-0 text-[#454545] text-[18px] font-semibold">
        <p className="w-[10%]">Product</p>
        <p className="w-[35%]">Title</p>
        <p className="w-[10%]">Price</p>
        <p className="w-[10%]">Quantity</p>
        <p className="w-[10%]">Total</p>
        <p className="w-[10%]">Remove</p>
      </div>
      <hr className="h-1 bg-[#e2e2e2] border-0" />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="flex w-full lg:overflow-x-hidden overflow-x-scroll items-center lg:gap-16 md:gap-12 sm:gap-4 gap-2 py-5 text-[#454545] md:text-[17px] sm:text-[14px] text-[12px] font-medium">
                <ToastContainer position="top-center" />
                <div className="md:w-[8.5%] w-[10%]">
                  <img
                    src={e.imageURL}
                    alt="img"
                    className="md:h-[62px] h-[65px]"
                    loading="lazy"
                  />
                </div>
                <p className="w-[30%] ">{e.name}</p>
                <p className="w-[5%] ml-2 ">${e.new_price}</p>
                <button className="w-[5%] ml-12 h-[50px] border-[2px] border-[#ebebeb] bg-white">
                  {cartItems[e.id]}
                </button>
                <p className="w-[5%] ml-10 ">{e.new_price * cartItems[e.id]}</p>
                <div className="w-[8%] ml-5 ">
                  <img
                    src={remove_icon}
                    onClick={() => removeFromCart(e.id)}
                    alt="icon"
                    className="w-[15px] my-0 mx-10 cursor-pointer"
                    loading="lazy"
                  />
                </div>
              </div>
              <hr className="border" />
            </div>
          );
        }
        return null;
      })}

      <div className="flex lg:flex-row md:flex-col my-[100px] mx-0 md:gap-7">
        <div className="flex-1 flex flex-col xl:mr-[200px] mr-[120px] gap-10">
          <h1 className="text-[30px] font-semibold">Cart Totals</h1>
          <div>
            <div className="flex justify-between py-[15px] px-0">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-0">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="flex justify-between py-[15px] px-0">
              <h3 className="font-semibold">Total</h3>
              <h3 className="font-semibold">${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button className="w-[262px] h-[58px] outline-none bg-[#ff5a5a] rounded-xl text-white text-[16px] font-semibold">
            Proceed To Checkout
          </button>
        </div>
        <div className="flex-1 text-[16px] font-medium">
          <p className="text-[#555]">If you have a promo code, Enter it here</p>
          <div className="lg:w-[500px] w-[680px] mt-[15px] xl:pl-[20px] pl-3 h-[50px] bg-[#eaeaea]">
            <input
              type="text"
              placeholder="Enter promo code"
              className="border-none bg-transparent text-[15px] lg:w-[330px] w-[500px] h-[48px] outline-none"
            />
            <button className="lg:w-[150px] w-[165px] h-[48px] text-[16px] bg-black text-white rounded-xl">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
