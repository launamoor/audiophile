"use client";
import React from "react";
import CategoriesFlex from "@/components/CategoriesFlex";
import EarphonesSection from "@/components/EarphonesSection";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";

const EarphonesPage = () => {
  const { cartOpen } = useCart();
  return (
    <>
      {cartOpen && <Cart />}
      <EarphonesSection />
      <CategoriesFlex />
    </>
  );
};

export default EarphonesPage;
