import React from "react";
import HeroSection from "@/components/HeroSection";
import CategoriesFlex from "@/components/CategoriesFlex";
import FeaturedItems from "@/components/FeaturedItems";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesFlex />
      <FeaturedItems />
    </div>
  );
};

export default HomePage;
