import React from "react";
import styles from "@/components/styles/ProductFlex.module.css";
import Image from "next/image";

const ProductFlex = ({ imagePath, title, description, newProduct, order }) => {
  return (
    <div className={styles.outerWrapper}>
      <div style={{ order: `${order}` }} className={styles.textboxDiv}>
        {newProduct && <p className={styles.newParagraph}>New Product</p>}
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <button className={styles.button}>See Product</button>
      </div>
      <div className={styles.imageDiv}>
        <Image src={imagePath} alt={title} />
      </div>
    </div>
  );
};

export default ProductFlex;
