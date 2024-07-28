"use client";
import React from "react";
import styles from "@/components/styles/PurchaseCompleted.module.css";
import Image from "next/image";
import tick from "@/public/images/checkout/icon-order-confirmation.svg";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

const PurchaseCompleted = ({ grandTotalPrice }) => {
  const { cartItems, removeAllItems } = useCart();
  return (
    <div className={styles.overlay}>
      <div className={styles.modalWindow}>
        <div className={styles.iconDiv}>
          <Image src={tick} alt="Order Complete Icon" />
        </div>
        <div className={styles.modalText}>
          <h3>
            THANK YOU <br /> FOR YOUR ORDER
          </h3>
          <p>You will receive an email confirmation shortly.</p>
        </div>
        <div className={styles.summaryDiv}>
          <div className={styles.summaryItems}>
            <div className={styles.flexRow}>
              <div className={styles.thumbnail}>
                <Image
                  src={cartItems[0].image}
                  alt={cartItems[0].name}
                  height={50}
                  width={50}
                />
              </div>
              <div className={styles.textbox}>
                <div title={cartItems[0].name} className={styles.textboxName}>
                  {cartItems[0].name.length > 15
                    ? cartItems[0].name.slice(0, 15) + "..."
                    : cartItems[0].name}
                </div>
                <div className={styles.textboxPrice}>
                  ${new Intl.NumberFormat().format(cartItems[0].price)}
                </div>
              </div>
              <div className={styles.quantity}>x{cartItems[0].quantity}</div>
            </div>
            <div className={styles.remainingItems}>
              {cartItems.length === 1
                ? null
                : `and ${cartItems.length - 1} other item(s)`}
            </div>
          </div>
          <div className={styles.summaryTotal}>
            <div className={styles.summaryTotalFlex}>
              <p>Grand Total</p>
              <div>${new Intl.NumberFormat().format(grandTotalPrice)}</div>
            </div>
          </div>
        </div>
        <Link href={"/"} className={styles.backToHomeButton}>
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default PurchaseCompleted;
