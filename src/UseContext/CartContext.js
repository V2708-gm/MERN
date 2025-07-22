
import React, { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: `Item ${cart.length + 1}`,
    };
    setCart([...cart, newItem]);
  };

  const removeItem = () => {
    setCart(prev => prev.slice(0, -1)); 
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
