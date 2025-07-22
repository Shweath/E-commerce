import React, { createContext, useState } from "react";
import allProducts from "../components/assets/all_product";

export const ShopContext = createContext(null); // Creating context

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < allProducts.length; index++) {
    cart[allProducts[index].id] = 0; // Ensure the correct IDs are used
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  // Define cart state
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1, // Ensure undefined values are handled
    }));
    console.log("Cart Updated:", cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0), // Prevent negative values
    }));
  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => product.id === Number(item));
        if (itemInfo) { 
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    
    return totalAmount;
  };

  const getTotalCartItem = () =>{
    let totalItem =0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItem+=cartItems[item]
      }
    }
    return totalItem;
  }
  
  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
