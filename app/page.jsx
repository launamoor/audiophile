"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import CategoriesFlex from "@/components/CategoriesFlex";
import FeaturedItems from "@/components/FeaturedItems";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";

const HomePage = () => {
  const { cartOpen } = useCart();
  return (
    <div>
      {cartOpen && <Cart />}
      <HeroSection />
      <CategoriesFlex />
      <FeaturedItems />
    </div>
  );
};

export default HomePage;
