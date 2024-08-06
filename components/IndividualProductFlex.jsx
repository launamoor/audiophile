"use client";
import React, { useEffect, useState } from "react";
import styles from "@/components/styles/ProductFlex.module.css";
import Image from "next/image";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const IndividualProductFlex = ({
  newProduct,
  order,
  cart,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
  addToCart,
  cartItems,
  imagePath,
  imageTablet,
  imageMobile,
  product,
  itemQuantity,
}) => {
  const [currentImage, setCurrentImage] = useState(imagePath);
  const [currentWidth, setCurrentWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1400
  );

  useEffect(() => {
    if (window.innerWidth >= 1200) setCurrentImage(() => imagePath);
    if (window.innerWidth < 1200 && window.innerWidth > 768)
      setCurrentImage(() => imageTablet);
    if (window.innerWidth <= 768) setCurrentImage(() => imageMobile);

    window.addEventListener("resize", () => setCurrentWidth(window.innerWidth));

    console.log(currentImage);

    return () =>
      window.removeEventListener("resize", () =>
        setCurrentWidth(window.innerWidth)
      );
  }, [currentWidth]);

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
        <h2 className={styles.title}>{product.name}</h2>
        <p className={styles.description}>{product.description}</p>

        {cart && (
          <div>
            <div className={styles.price}>${product.price}</div>
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
        <Image
          priority
          width={540}
          height={560}
          src={currentImage}
          alt={product.name}
        />
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

export default IndividualProductFlex;
