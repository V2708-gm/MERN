
import React, { useContext } from "react";
import CartContext from "./CartContext";

const CartApp = () => {
  const { cart, addItem, removeItem } = useContext(CartContext);

  return (
    <div>
        
      <h1> 🛒 Shopping Cart</h1>
      <button onClick={addItem}>Add Item</button>
      <button onClick={removeItem} disabled={cart.length === 0}>
        Remove Item
      </button>

      <h2>Cart Items ({cart.length})</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CartApp;
