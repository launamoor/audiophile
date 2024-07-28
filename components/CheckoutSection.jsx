"use client";
import React, { useState } from "react";
import styles from "@/components/styles/CheckoutSection.module.css";
import CheckoutInput from "./CheckoutInput";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import PurchaseCompleted from "./PurchaseCompleted";

const CheckoutSection = () => {
  const { cartItems } = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentlyFocused, setCurrentlyFocused] = useState(null);
  const handleFocus = (e) => {
    setCurrentlyFocused(e.target.id);
  };

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartItems?.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }

    return total;
  };

  const shipping = 50;
  const grandTotalPrice = getTotalPrice() + getTotalPrice() * 0.2 + shipping;

  return (
    <section className={styles.outerWrapper}>
      <div className={styles.container}>
        <div className={styles.innerWrapper}>
          <div className={styles.checkoutWrapper}>
            <div className={styles.checkoutInnerWrapper}>
              <h3>Checkout</h3>
              <div className={styles.billingDetailsDiv}>
                <h6 className={styles.partTitle}>Billing details</h6>
                <div className={styles.billingGrid}>
                  <CheckoutInput
                    label={"Name"}
                    type={"text"}
                    placeholder={"Name"}
                  />
                  <CheckoutInput
                    label={"Email Address"}
                    type={"email"}
                    placeholder={"alexei@mail.com"}
                  />
                  <CheckoutInput
                    label={"Phone Number"}
                    type={"number"}
                    placeholder={"+1 202-555-0136"}
                  />
                </div>
              </div>
              <div className={styles.shippingDetailsDiv}>
                <h6 className={styles.partTitle}>Shipping Info</h6>
                <div className={styles.shippingGrid}>
                  <CheckoutInput
                    style={{ gridColumn: "1 / -1" }}
                    label={"Address"}
                    type={"text"}
                    placeholder={"1137 Williams Avenue"}
                  />
                  <CheckoutInput
                    label={"ZIP Code"}
                    type={"text"}
                    placeholder={"10001"}
                  />
                  <CheckoutInput
                    label={"City"}
                    type={"text"}
                    placeholder={"New York"}
                  />
                  <CheckoutInput
                    label={"Country"}
                    type={"text"}
                    placeholder={"United States"}
                  />
                </div>
              </div>
              <div className={styles.paymentDetailsDiv}>
                <h6 className={styles.partTitle}>Payment details</h6>
                <div className={styles.paymentDetailsGrid}>
                  <div className={styles.paymentTitle}>Payment Method</div>
                  <div
                    style={
                      currentlyFocused === "paymentMethod1"
                        ? {
                            outline: "1px solid #D87D4A",
                            border: "1px solid transparent",
                          }
                        : {
                            outline: "1px solid transparent",
                            border: "1px solid #cfcfcf",
                          }
                    }
                    className={styles.paymentRadioOne}
                  >
                    <input
                      onClickCapture={handleFocus}
                      id="paymentMethod1"
                      className={styles.radioOne}
                      name="paymentMethod"
                      type="radio"
                    />
                    <span className={styles.customRadioOne}></span>
                    <label className={styles.label} htmlFor="paymentMethod1">
                      e-Money
                    </label>
                  </div>
                  <div
                    style={
                      currentlyFocused === "paymentMethod2"
                        ? {
                            outline: "1px solid #D87D4A",
                            border: "1px solid transparent",
                          }
                        : {
                            outline: "1px solid transparent",
                            border: "1px solid #cfcfcf",
                          }
                    }
                    className={styles.paymentRadioTwo}
                  >
                    <input
                      onClickCapture={handleFocus}
                      id="paymentMethod2"
                      className={styles.radioTwo}
                      name="paymentMethod"
                      type="radio"
                    />
                    <span className={styles.customRadioTwo}></span>
                    <label className={styles.label} htmlFor="paymentMethod2">
                      Cash on Delivery
                    </label>
                  </div>
                </div>
                <div className={styles.pinDiv}>
                  <div className={styles.pinGrid}>
                    <CheckoutInput
                      label={"e-Money Number"}
                      type={"number"}
                      placeholder={"238521993"}
                    />
                    <CheckoutInput
                      label={"e-Money PIN"}
                      type={"number"}
                      placeholder={"6891"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.summaryWrapper}>
            <div className={styles.summaryInnerWrapper}>
              <h6>Summary</h6>
              <div className={styles.summaryRows}>
                {cartItems?.map((item) => (
                  <div className={styles.summaryRow}>
                    <div className={styles.thumbnail}>
                      <Image
                        src={item.image}
                        alt="asd"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className={styles.textbox}>
                      <div title={item.name} className={styles.textboxName}>
                        {item.name.length > 15
                          ? item.name.slice(0, 15) + "..."
                          : item.name}
                      </div>
                      <div className={styles.textboxPrice}>
                        ${new Intl.NumberFormat().format(item.price)}
                      </div>
                    </div>
                    <div className={styles.quantity}>x{item.quantity}</div>
                  </div>
                ))}
              </div>
              <div className={styles.summaryPrices}>
                <div className={styles.totalFlex}>
                  <div className={styles.flexTitle}>Total</div>
                  <div className={styles.flexPrice}>
                    ${new Intl.NumberFormat().format(getTotalPrice())}
                  </div>
                </div>
                <div className={styles.shippingFlex}>
                  <div className={styles.flexTitle}>Shipping</div>
                  <div className={styles.flexPrice}>${shipping}</div>
                </div>
                <div className={styles.vatFlex}>
                  <div className={styles.flexTitle}>VAT (Included)</div>
                  <div className={styles.flexPrice}>
                    ${new Intl.NumberFormat().format(getTotalPrice() * 0.2)}
                  </div>
                </div>
              </div>
              <div className={styles.grandTotalDiv}>
                <div className={styles.flexTitle}>Grand Total</div>
                <div className={styles.flexTotalPrice}>
                  ${new Intl.NumberFormat().format(grandTotalPrice)}
                </div>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className={styles.completePurchaseButton}
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <PurchaseCompleted grandTotalPrice={grandTotalPrice} />}
    </section>
  );
};

export default CheckoutSection;
