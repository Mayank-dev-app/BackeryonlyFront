import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existing = cartItems.find(i => i.name === item.name);
    if (existing) {
      setCartItems(cartItems.map(i =>
        i.name === item.name ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const removeFromCart = (name) => {
    setCartItems(cartItems.filter(item => item.name !== name));
  };

  const updateQty = (name, qty) => {
    setCartItems(cartItems.map(item =>
      item.name === name ? { ...item, qty } : item
    ));
  };

  const clearCart = () => setCartItems([]);

  const totalPrice = cartItems.reduce((total, item) => total + item.qty * parseInt(item.price.replace("₹", "")), 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQty, clearCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
