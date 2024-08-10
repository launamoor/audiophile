"use client";
import React, { useState } from "react";
import styles from "@/components/styles/CheckoutSection.module.css";
import CheckoutInput from "./CheckoutInput";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import PurchaseCompleted from "./PurchaseCompleted";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutSection = () => {
  const { cartItems } = useCart();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentlyFocused, setCurrentlyFocused] = useState(null);
  const [radioChecked, setRadioChecked] = useState(null);
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    paymentMethod: "",
    cardNumber: "",
    cardPin: "",
  });
  const handleFocus = (e) => {
    setCurrentlyFocused(e.target.id);
    setRadioChecked(e.target.id);
    setDetails((prev) => ({
      ...prev,
      paymentMethod: e.target.id,
    }));
  };

  const getTotalPrice = () => {
    let total = 0;
    for (let i = 0; i < cartItems?.length; i++) {
      total += cartItems[i].price * cartItems[i].quantity;
    }

    return total;
  };

  const handleInput = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const validateForm = () => {
    if (
      details.name.split(" ").length < 2 ||
      !details.email.split("").includes("@") ||
      details.phoneNumber.length < 6 ||
      details.address.split(" ").length < 2 ||
      details.zip.length < 3 ||
      details.city.length < 3 ||
      details.country.length < 3 ||
      !details.paymentMethod ||
      details.cardNumber.length < 6 ||
      details.cardPin.length < 4
    ) {
      toast.error("Please check the details provided and try again!", {
        className: styles.toastStyle,
      });
    } else {
      setModalOpen(true);
    }
  };

  const shipping = 50;
  const grandTotalPrice = getTotalPrice() + getTotalPrice() * 0.2 + shipping;

  return (
    <section className={styles.outerWrapper}>
      <div className={styles.container}>
        <div className={styles.innerWrapper}>
          <div className={styles.checkoutWrapper}>
            <form className={styles.checkoutInnerWrapper}>
              <h3>Checkout</h3>
              <div className={styles.billingDetailsDiv}>
                <h6 className={styles.partTitle}>Billing details</h6>
                <div className={styles.billingGrid}>
                  <CheckoutInput
                    id={"name"}
                    label={"Name"}
                    type={"text"}
                    placeholder={"Name"}
                    required={true}
                    onChange={handleInput}
                    value={details.name}
                  />
                  <CheckoutInput
                    id={"email"}
                    label={"Email Address"}
                    type={"email"}
                    placeholder={"alexei@mail.com"}
                    required={true}
                    onChange={handleInput}
                    value={details.email}
                  />
                  <CheckoutInput
                    id={"phoneNumber"}
                    label={"Phone Number"}
                    type={"number"}
                    placeholder={"+1 202-555-0136"}
                    required={true}
                    onChange={handleInput}
                    value={details.phoneNumber}
                  />
                </div>
              </div>
              <div className={styles.shippingDetailsDiv}>
                <h6 className={styles.partTitle}>Shipping Info</h6>
                <div className={styles.shippingGrid}>
                  <CheckoutInput
                    id={"address"}
                    style={{ gridColumn: "1 / -1" }}
                    label={"Address"}
                    type={"text"}
                    placeholder={"1137 Williams Avenue"}
                    required={true}
                    onChange={handleInput}
                    value={details.address}
                  />
                  <CheckoutInput
                    id={"zip"}
                    label={"ZIP Code"}
                    type={"text"}
                    placeholder={"10001"}
                    required={true}
                    onChange={handleInput}
                    value={details.zip}
                  />
                  <CheckoutInput
                    id={"city"}
                    label={"City"}
                    type={"text"}
                    placeholder={"New York"}
                    required={true}
                    onChange={handleInput}
                    value={details.city}
                  />
                  <CheckoutInput
                    id={"country"}
                    label={"Country"}
                    type={"text"}
                    placeholder={"United States"}
                    required={true}
                    onChange={handleInput}
                    value={details.country}
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
                      id={"paymentMethod1"}
                      className={styles.radioOne}
                      name="paymentMethod"
                      type="radio"
                      checked={radioChecked === "paymentMethod1"}
                      readOnly
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
                      id={"paymentMethod2"}
                      className={styles.radioTwo}
                      name="paymentMethod"
                      type="radio"
                      checked={radioChecked === "paymentMethod2"}
                      readOnly
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
                      id={"cardNumber"}
                      label={"e-Money Number"}
                      type={"number"}
                      placeholder={"238521993"}
                      value={details.cardNumber}
                      onChange={handleInput}
                    />
                    <CheckoutInput
                      id={"cardPin"}
                      label={"e-Money PIN"}
                      type={"number"}
                      placeholder={"6891"}
                      value={details.cardPin}
                      onChange={handleInput}
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className={styles.summaryWrapper}>
            <div className={styles.summaryInnerWrapper}>
              <h6>Summary</h6>
              <div className={styles.summaryRows}>
                {cartItems?.map((item, id) => (
                  <div key={id} className={styles.summaryRow}>
                    <div className={styles.thumbnail}>
                      <Image
                        src={item.image}
                        alt={item.name}
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
                // onClick={() => setModalOpen(true)}
                onClick={validateForm}
                className={styles.completePurchaseButton}
              >
                Continue & Pay
              </button>
            </div>
          </div>
        </div>
      </div>
      {modalOpen && <PurchaseCompleted grandTotalPrice={grandTotalPrice} />}
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
    </section>
  );
};

export default CheckoutSection;
