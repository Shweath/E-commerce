import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/items/Items";

const ShopCatagory = (props) => {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="w-full">
      {/* Banner Image */}
      <img src={props.banner} className="block mx-auto my-8 w-[82%]" alt="" />

      {/* Sorting Section */}
      <div className="flex justify-between items-center mx-40 my-4">
        <p className="text-gray-700">
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>
        <div className="flex items-center px-5 py-2 border border-gray-400 rounded-full cursor-pointer">
          <span className="text-gray-700">Sort by</span>
          <img src={dropdown_icon} alt="" className="ml-2 w-4 h-4" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-[1fr_1fr_1fr_1fr] gap-y-20 mx-[40px]">
        {allProducts.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
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
      <div className="loadmode flex justify-center items-center mx-auto my-[150px] w-[233px] h-[69px] rounded-[75px] bg-[#ededed] text-[#787878] text-[18px] font-[500]">
      Explore Mode
      </div>
    </div>
  );
};

export default ShopCatagory;
