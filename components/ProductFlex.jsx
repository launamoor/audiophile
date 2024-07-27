"use client";
import React from "react";
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
  itemQuantity,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  addToCart,
  product,
}) => {
  const handleAddToCart = () => {
    addToCart({
      ...product,
      cartQuantity: cartQuantity + itemQuantity,
    });
    toast.success("Item added to cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      className: styles.toastStyle,
    });
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
      <ToastContainer />
    </div>
  );
};

export default ProductFlex;
