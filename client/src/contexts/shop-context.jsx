import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

// Create a new context for the shop
export const ShopContext = createContext(null);

// Function to initialize the cart with all products having a quantity of 0
const getDefaultCart = () => {
  let cart = {};
  PRODUCTS.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
};

// This function sets up the initial state for compareItems. 
// It creates an object where each product ID is a key, and 
// the value is false, indicating that no products are selected for comparison initially.
const getDefaultCompare = () => {
  let compare = {};
  PRODUCTS.forEach(product => {
    compare[product.id] = false;
  });
  return compare;
};

// Provider component for the ShopContext
export const ShopContextProvider = (props) => {
  // State for tracking items in the cart
  const [cartItems, setCartItems] = useState(getDefaultCart());
  // State for tracking items selected for comparison
  // This line creates a state called compareItems to keep track of which products 
  // are selected for comparison. It starts with all products set to false, meaning 
  // they're not selected for comparison.
  const [compareItems, setCompareItems] = useState(getDefaultCompare());

  // Function to calculate the total amount in the cart
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

  // Function to add an item to the cart
  const addToCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Function to toggle the comparison status of an item
  const addToCompare = (itemId) => {
    setCompareItems(prev => ({ ...prev, [itemId]: !prev[itemId] }));
  };

  // Function to clear the cart
  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  // The value that will be passed down to components using the ShopContext
  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    checkout,
    compareItems,
    addToCompare,
  };

  // Render the provider component with the contextValue
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
