import React from "react";
import styles from "@/components/styles/GoBackButton.module.css";
import Link from "next/link";

const GoBackButton = () => {
  return (
    <Link href={"/"} className={styles.button}>
      Go Back
    </Link>
  );
};

export default GoBackButton;
