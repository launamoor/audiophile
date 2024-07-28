"use client";
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== "undefined") {
      const storedCartItems = localStorage.getItem("cartItems");
      return storedCartItems ? JSON.parse(storedCartItems) : [];
    }
  });

  // Load cart items from local storage on initial mount
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  // Update local storage whenever cartItems change
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  // const [cartOpen, setCartOpen] = useState(false);
  // const [cartItems, setCartItems] = useState([]);

  // // Check if localStorage is available
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const storedCartItems = localStorage.getItem("cartItems");
  //     setCartItems(storedCartItems ? JSON.parse(storedCartItems) : []);
  //   }
  // }, []);

  // // Update local storage whenever cartItems change
  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
  //   }
  // }, [cartItems]);

  const openCart = () => setCartOpen(true);

  const closeCart = (e) => {
    if (e.target.id === "overlay") setCartOpen(false);
  };

  const removeAllItems = () => setCartItems([]);

  const addToCart = (itemToAdd) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.id === itemToAdd.id
    );

    setCartItems((prevCartItems) => {
      if (existingIndex !== -1) {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingIndex] = {
          ...updatedCartItems[existingIndex],
          quantity:
            updatedCartItems[existingIndex].quantity + itemToAdd.quantity,
        };
        return updatedCartItems;
      } else {
        return [...prevCartItems, itemToAdd];
      }
    });
  };

  const updateCart = (itemToUpdate) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.id === itemToUpdate.id
    );

    if (existingIndex !== -1) {
      setCartItems((prevCartItems) => {
        const updatedCartItems = [...prevCartItems];
        updatedCartItems[existingIndex] = {
          ...updatedCartItems[existingIndex],
          quantity: itemToUpdate.quantity, // Update the quantity to the new value
        };
        return updatedCartItems;
      });
    }
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
    updateCart,
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
