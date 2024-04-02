import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  PRODUCTS.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};

const getDefaultCompare = () => {
  let compare = {};
  PRODUCTS.forEach(product => {
    compare[product.id] = false;
  });
  return compare;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [compareItems, setCompareItems] = useState(getDefaultCompare());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        let itemInfo = PRODUCTS.find(product => product.id === Number(itemId));
        totalAmount += cartItems[itemId] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const addToCompare = (itemId) => {
    setCompareItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    compareItems,
    addToCompare,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
