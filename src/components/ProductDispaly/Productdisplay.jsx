import React, { useContext } from 'react';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from '../../context/ShopContext';

const Productdisplay = ({ product }) => {
  if (!product) return <h2 className="text-center text-2xl font-semibold">Loading Product...</h2>;
const {addToCart} =useContext(ShopContext);
  return (
    <div className="product-display flex flex-col md:flex-row gap-10 px-10 py-20">
      {/* Left Section */}
      <div className="left flex gap-5">
        <div className="list flex flex-col gap-4">
          <img className="w-20 h-24 object-cover border border-gray-200 rounded-lg" src={product.image} alt="product" />
          <img className="w-20 h-24 object-cover border border-gray-200 rounded-lg" src={product.image} alt="product" />
          <img className="w-20 h-24 object-cover border border-gray-200 rounded-lg" src={product.image} alt="product" />
          <img className="w-20 h-24 object-cover border border-gray-200 rounded-lg" src={product.image} alt="product" />
        </div>
        <div className="display_img">
          <img className="w-[400px] h-[500px] object-cover border border-gray-300 rounded-lg shadow-lg" src={product.image} alt="product" />
        </div>
      </div>

      {/* Right Section */}
      <div className="right flex flex-col gap-4">
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        
        {/* Star Rating */}
        <div className="flex items-center gap-1">
          <img className="w-5" src={star_icon} alt="star" />
          <img className="w-5" src={star_icon} alt="star" />
          <img className="w-5" src={star_icon} alt="star" />
          <img className="w-5" src={star_icon} alt="star" />
          <img className="w-5" src={star_dull_icon} alt="star dull" />
          <p className="text-gray-500 text-sm">(122)</p>
        </div>

        {/* Price Section */}
        <div className="prices flex items-center gap-4 text-xl font-semibold">
          <span className="text-gray-400 line-through">${product.old_price}</span>
          <span className="text-red-500">${product.new_price}</span>
        </div>

        {/* Description */}
        <p className="text-gray-600">
          The fabric drapes smoothly, its texture soft to the touch, with a subtle sheen that catches the light. Every stitch is precise, ensuring durability, while the colors remain rich and vibrant.
        </p>

        {/* Select Size */}
        <div className="right-size">
          <h1 className="text-lg font-medium">Select Size</h1>
          <div className="size flex gap-4 mt-2">
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">S</button>
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">M</button>
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">L</button>
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">XL</button>
            <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">XXL</button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <button onClick={()=>{addToCart(product.id)}} className="bg-red-500 text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-red-600 mt-4">
          ADD TO CART
        </button>

        {/* Category & Tags */}
        <p className="text-gray-500 mt-3">
          <span className="font-medium">Category:</span> Men, Jackets
        </p>
        <p className="text-gray-500">
          <span className="font-medium">Tags:</span> Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default Productdisplay;
