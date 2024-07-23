import "@/assets/styles/global.css";
import Navbar from "@/components/Navbar";
import DescriptionSection from "@/components/DescriptionSection";
import Footer from "@/components/Footer";

import React from "react";

export const metadata = {
  title: "Audiophile",
  description: "Audiophile",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <DescriptionSection />
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
