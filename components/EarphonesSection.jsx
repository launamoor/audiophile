"use client";
import React from "react";
import styles from "@/components/styles/EarphonesSection.module.css";
import ProductFlex from "./ProductFlex";
import { requestProducts } from "@/utils/requests";

const EarphonesSection = () => {
  const products = requestProducts();
  const earphones = products.filter(
    (product) => product.category === "earphones"
  );

  return (
    <div>
      <div className={styles.titleOuterWrapper}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Earphones</h2>
        </div>
      </div>
      <section className={styles.sectionOuterWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionFlex}>
            <ProductFlex
              newProduct={true}
              order={1}
              productDetails={earphones[0]}
              seeProductButton={true}
              imagePath={earphones[0].categoryImage.desktop}
              imageTablet={earphones[0].categoryImage.tablet}
              imageMobile={earphones[0].categoryImage.mobile}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarphonesSection;
