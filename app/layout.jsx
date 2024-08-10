import "@/assets/styles/global.css";
import Navbar from "@/components/Navbar";
import DescriptionSection from "@/components/DescriptionSection";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

import React from "react";

export const metadata = {
  title: "Audiophile || Bart Jozef",
  description: "Audiophile",
  icons: {
    icon: "/images/favicon.png",
  },
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <DescriptionSection />
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
};

export default MainLayout;
