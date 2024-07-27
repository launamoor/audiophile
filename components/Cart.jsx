import React from "react";
import styles from "@/components/styles/Cart.module.css";
import { useCart } from "@/context/CartContext";
import Image from "next/image";

const Cart = () => {
  const { closeCart, cartItems, removeAllItems, updateCart, removeFromCart } =
    useCart();
  console.log(cartItems);

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }

    return total;
  };

  const increaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCart(updatedCartItems.find((item) => item.id === itemId));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    );

    if (
      updatedCartItems.filter((item) => item.id === itemId)[0].quantity >= 1
    ) {
      updateCart(updatedCartItems.find((item) => item.id === itemId));
    } else {
      removeFromCart(itemId);
    }
  };

  return (
    <div id="overlay" onClick={closeCart} className={styles.overlay}>
      <div className={styles.outerWrapper}>
        <div className={styles.cartFlex}>
          <div className={styles.titleRow}>
            <h6>Cart({cartItems.length})</h6>
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
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                    <div className={styles.textbox}>
                      <div className={styles.textboxTitle}>{item.name}</div>
                      <div className={styles.textboxPrice}>
                        ${new Intl.NumberFormat().format(item.price)}
                      </div>
                    </div>
                    <div className={styles.quantityInput}>
                      <div className={styles.addToCartInput}>
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className={styles.cartInputButton}
                        >
                          -
                        </button>
                        <div className={styles.quantity}>{item.quantity}</div>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className={styles.cartInputButton}
                        >
                          +
                        </button>
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
