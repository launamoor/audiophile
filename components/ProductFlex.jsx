"use client";
import React, { useState } from "react";
import styles from "@/components/styles/ProductFlex.module.css";
import Image from "next/image";
import Link from "next/link";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductFlex = ({
  newProduct,
  order,
  title,
  description,
  imagePath,
  seeProductButton,
  cart,
  price,
  productNumber,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  addToCart,
  cartItems,
  product,
  itemQuantity,
}) => {
  const handleAddToCart = () => {
    const itemToCart = {
      id: product.id,
      name: product.name,
      image: product.cartImage,
      price: product.price,
      quantity: product.cartQuantity + itemQuantity,
    };

    if (cartItems.some((item) => item.id === product.id)) {
      toast.info("Item already in cart!", {
        className: styles.toastStyle,
      });
    } else {
      addToCart(itemToCart);
      toast.success("Item added to cart!", {
        className: styles.toastStyle,
      });
    }
  };

  return (
    <div className={styles.outerWrapper}>
      <div style={{ order: `${order}` }} className={styles.textboxDiv}>
        {newProduct && <p className={styles.newParagraph}>New Product</p>}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        {seeProductButton && (
          <Link href={`/product/${productNumber}`} className={styles.button}>
            See Product
          </Link>
        )}
        {cart && (
          <div>
            <div className={styles.price}>${price}</div>
            <div className={styles.addToCartDiv}>
              <div className={styles.addToCartInput}>
                <button
                  onClick={handleDecreaseQuantity}
                  className={styles.cartInputButton}
                >
                  -
                </button>
                <div className={styles.quantity}>{itemQuantity}</div>
                <button
                  onClick={handleIncreaseQuantity}
                  className={styles.cartInputButton}
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={styles.addToCartButton}
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.imageDiv}>
        <Image width={540} height={560} src={imagePath} alt={title} />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick={true}
        pauseOnHover={false}
        draggable={true}
        progress={undefined}
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default ProductFlex;
