import React from "react";
import HeroSection from "@/components/HeroSection";
import CategoriesFlex from "@/components/CategoriesFlex";
import FeaturedItems from "@/components/FeaturedItems";
import DescriptionSection from "@/components/DescriptionSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesFlex />
      <FeaturedItems />
      <DescriptionSection />
    </div>
  );
};

export default HomePage;
