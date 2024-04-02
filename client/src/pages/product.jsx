import React, { useContext } from "react";
import { ShopContext } from "../contexts/shop-context";
// If you have a separate context for comparison, import it here

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, addToCompare, cartItems, compareItems } = useContext(ShopContext); // Include addToCompare and compareItems

  const cartItemCount = cartItems[id] || 0; // Ensure a default value
  const compareItemCount = compareItems[id] || 0; // Ensure a default value, assuming compareItems is an object like cartItems

  return (
    <div className="product">
      <img src={productImage} alt={productName} /> {/* Added an alt attribute for accessibility */}
      <div className="description">
        <p><b>{productName}</b></p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && ` (${cartItemCount})`}
      </button>
      <button className="compareBttn" onClick={() => addToCompare(id)}>
        Compare {compareItemCount > 0 && ` (${compareItemCount})`}
      </button>
    </div>
  );
};
