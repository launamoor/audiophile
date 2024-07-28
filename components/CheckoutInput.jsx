import React from "react";
import styles from "@/components/styles/CheckoutInput.module.css";

const CheckoutInput = ({ label, type, placeholder, style }) => {
  return (
    <div style={style} className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <input type={type} placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default CheckoutInput;
