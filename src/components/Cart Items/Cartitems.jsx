import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
import clsx from "clsx";
const hr = clsx("h-[3px]  bg-[#e2e2e2] border border-0 ");
const hr2 = clsx("h-[3px]   bg-[#e2e2e2] border border-0 ");
const total = clsx("flex justify-between px-[15px] py-[0px] ");
const Cartitems = () => {
  const {  allProducts, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className="mx-[100px] mt-[50px] mb-[170px] ">
      <div className="main grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] px-[20px] py-[0px] text-[#454545] text-[18px] font-[600]">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className={hr} />
      {allProducts.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div>
                <div className="main grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-[75px] px-[20px] py-[0px] text-[#454545] text-[17px] font-[500]">
                  <img src={e.image} className="h-[50px] " alt="" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="quantity w-[64px] h-[50px] border border-2px border-[#ebebeb] bg-[#fff] ">
                    {cartItems[e.id]}
                  </button>
                  <p>${e.new_price * cartItems[e.id]}</p>
                  <img
                    className="w-[15px] mx-[0px] my-[40px] cursor-pointer "
                    src={remove_icon}
                    onClick={() => {
                      removeFromCart(e.id);
                    }}
                    alt=""
                  />
                </div>
                <hr className={hr} />
              </div>
            </div>
          );
        }
        return null;
      })}
      {Object.values(cartItems).some((qty) => qty > 0) && (
        <div className="down flex mx-[100px] my-[0px]">
          <div className="total w-[754px] flex flex-1 flex-col mr-[200px] gap-[40px]">
            <h1 className="text-[20px] font-[600] mt-[20px]">Cart Totals</h1>
            <div className={total}>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className={hr2} />
            <div className={total}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className={hr2} />
            <div className={`${total} text-[20px] font-[600]`}>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
            <button className="w-[262px] h-[58px] outline-0 border-0 bg-[#ff5a5a] text-[#fff] text-[16px] font-[600] cursor-pointer">
              Proceed To Checkout
            </button>
          </div>
          <div className="flex flex-1 flex-col font-[500] text-[16px] mt-[150px]">
            <p className="text-[#555]">If you have a promo code, enter it here.</p>
            <div className="promobox w-[504px] mt-[15px] pl-[20px] h-[58px] bg-[#eaeaea] flex items-center">
              <input
                type="text"
                placeholder="Promo code"
                className="border-0 outline-0 bg-transparent text-[16px] w-[330px] h-[50px] px-2"
              />
              <button className="ml-2 bg-[#ff5a5a] text-white px-4 py-2 rounded cursor-pointer">Submit</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cartitems;
