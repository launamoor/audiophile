"use client";
import React from "react";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";
import CheckoutSection from "@/components/CheckoutSection";

const CheckoutPage = () => {
  const { cartOpen } = useCart();
  return (
    <div>
      {cartOpen && <Cart />}
      <CheckoutSection />
    </div>
  );
};

export default CheckoutPage;
