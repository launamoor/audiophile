import React from "react";
import styles from "@/components/styles/CheckoutInput.module.css";

const CheckoutInput = ({
  label,
  type,
  placeholder,
  style,
  required,
  onChange,
  id,
}) => {
  return (
    <div style={style} className={styles.wrapper}>
      <div className={styles.label}>{label}</div>
      <input
        id={id}
        onChange={onChange}
        required={required}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </div>
  );
};

export default CheckoutInput;
