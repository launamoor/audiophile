"use client";
import React from "react";
import CategoriesFlex from "@/components/CategoriesFlex";
import SpeakersSection from "@/components/SpeakersSection";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";

const SpeakersPage = () => {
  const { cartOpen } = useCart();
  return (
    <>
      {cartOpen && <Cart />}
      <SpeakersSection />
      <CategoriesFlex />
    </>
  );
};

export default SpeakersPage;
