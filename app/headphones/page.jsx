"use client";
import React from "react";
import HeadphonesMark2Section from "@/components/HeadphonesMark2Section";
import CategoriesFlex from "@/components/CategoriesFlex";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";

const HeadphonesPage = () => {
  const { cartOpen } = useCart();
  return (
    <>
      {cartOpen && <Cart />}
      <HeadphonesMark2Section />
      <CategoriesFlex />
    </>
  );
};

export default HeadphonesPage;
