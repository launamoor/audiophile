"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import CategoriesFlex from "@/components/CategoriesFlex";
import ProductFlex from "@/components/ProductFlex";
import { requestProduct } from "@/utils/requests";
import ProductSection from "@/components/ProductSection";
import { useCart } from "@/context/CartContext";
import Cart from "@/components/Cart";

const ProductPage = () => {
  const { id } = useParams();
  const product = requestProduct(+id);

  const [itemQuantity, setItemQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    if (itemQuantity < 10) setItemQuantity((prev) => prev + 1);
  };
  const handleDecreaseQuantity = () => {
    if (itemQuantity > 1) setItemQuantity((prev) => prev - 1);
  };

  const { cartOpen, addToCart, cartItems } = useCart();

  return (
    <>
      {cartOpen && <Cart />}
      <ProductSection
        featuresText={product[0].features}
        features={product[0].includes}
        gallery={product[0].gallery}
        others={product[0].others}
      >
        <ProductFlex
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
          newProduct={product[0].new}
          order={1}
          title={product[0].name}
          description={product[0].description}
          imagePath={product[0].image.desktop}
          seeProductButton={false}
          cart={true}
          price={new Intl.NumberFormat().format(product[0].price)}
          product={product[0]}
          addToCart={addToCart}
          cartItems={cartItems}
          itemQuantity={itemQuantity}
        />
      </ProductSection>
      <CategoriesFlex />
    </>
  );
};

export default ProductPage;
