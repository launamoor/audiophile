"use client";
import { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const openCart = () => setCartOpen(true);

  const closeCart = (e) => {
    if (e.target.id === "overlay") setCartOpen(false);
  };

  const removeAllItems = () => setCartItems([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = {
    cartOpen,
    openCart,
    closeCart,
    cartItems,
    addToCart,
    removeFromCart,
    removeAllItems,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
