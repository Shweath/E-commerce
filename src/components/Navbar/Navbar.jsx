import React, { useContext, useState } from "react";
import clsx from "clsx";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";
const list = clsx(
  "flex",
  "flex-col",
  "items-center",
  "justify-center",
  "gap-[3px]",
  "cursor-pointer"
);
const Navbar = () => {
  const [menue, setmenue] = useState("shop");

  const  {getTotalCartItem} = useContext(ShopContext);



  return (
    <>
      <div className="navbar flex justify-around p-[16px] shadow-[0px_1px_3px_-2px_black]">
        <div className="navlogo flex items-center gap-[10px]">
          <img src={logo} className="h-[45px] w-[45px] " alt="" />
          <p className="text-[#171717] h-[45px] text-[35px] text-[38px] font-[600]">
            SHOPPER
          </p>
        </div>
        <ul className="anv-menu flex mx-[10px] items-center list-none gap-[50px] text-[#626262] text-[20px] font-[500]">
          <li
            onClick={() => {
              setmenue("shop");
            }}
            className={list}
          >
            <Link to="/"> Shop</Link>

            {menue === "shop" ? (
              <hr className="border-0 w-[80%] h-[3px] rounded-xl bg-[#FF4141]" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setmenue("mens");
            }}
            className={list}
          >
            <Link to="/mens">Man</Link>

            {menue === "mens" ? (
              <hr className="border-0 w-[80%] h-[3px] rounded-xl bg-[#FF4141]" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setmenue("womens");
            }}
            className={list}
          >
            <Link to="/womens">Women</Link>
            {menue === "womens" ? (
              <hr className="border-0 w-[80%] h-[3px] rounded-xl bg-[#FF4141]" />
            ) : (
              <></>
            )}
          </li>
          <li
            onClick={() => {
              setmenue("kids");
            }}
            className={list}
          >
            <Link to="/kids">Kids</Link>
            {menue === "kids" ? (
              <hr className="border-0 w-[80%] h-[3px] rounded-xl bg-[#FF4141]" />
            ) : (
              <></>
            )}
          </li>
        </ul>
        <div className="login-cart flex items-center ">
          <Link to="/login">
            {" "}
            <button className="w-[120px] h-[50px] mx-[5px] outline-none border border-color-[#7a7a7a] rounded-[75px] color-[#515151] text-[15px] font-[500] bg-white cursor-pointer active:bg-[#f3f3f3]">
              Login
            </button>
          </Link>
          <Link to="/cart">
            <img
              src={cart_icon}
              className="h-[40px] mx-[5px] w-[40px] "
              alt=""
            />
          </Link>
          <div className="nav-cart-count w-[20px] h-[20px] flex justify-center items-center mt-[-20px] me-[80px] rounded-[15px] text-[10px] bg-[red] text-white ">
            {getTotalCartItem()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
