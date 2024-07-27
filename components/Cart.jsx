import React from "react";
import styles from "@/components/styles/Cart.module.css";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const Cart = () => {
  const { closeCart, cartItems, removeAllItems } = useCart();
  console.log(cartItems);

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }

    return total;
  };
  return (
    <div id="overlay" onClick={closeCart} className={styles.overlay}>
      <div className={styles.outerWrapper}>
        <div className={styles.cartFlex}>
          <div className={styles.titleRow}>
            <h6>Cart(3)</h6>
            <button onClick={removeAllItems} className={styles.removeButton}>
              Remove all
            </button>
          </div>
          <div className={styles.itemsRows}>
            {cartItems.length === 0
              ? "Your cart is empty."
              : cartItems.map((item, i) => (
                  <div key={i} className={styles.itemRow}>
                    <div className={styles.thumbnail}>
                      <Image
                        src={item.cartImage}
                        alt={item.name}
                        width={64}
                        height={64}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className={styles.textbox}>
                      <div className={styles.textboxTitle}>
                        {item.name.slice(0, 12)}
                      </div>
                      <div className={styles.textboxPrice}>
                        ${new Intl.NumberFormat().format(item.price)}
                      </div>
                    </div>
                    <div className={styles.quantityInput}>
                      <div className={styles.addToCartInput}>
                        <button className={styles.cartInputButton}>-</button>
                        <div className={styles.quantity}>{item.quantity}</div>
                        <button className={styles.cartInputButton}>+</button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <div className={styles.totalRow}>
            <p className={styles.totalTitle}>Total</p>
            <div className={styles.totalPrice}>
              ${new Intl.NumberFormat().format(getTotalPrice())}
            </div>
          </div>
        </div>
        <button className={styles.checkoutButton}>Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
