"use client";
import React from "react";
import styles from "@/components/styles/SpeakersSection.module.css";
import ProductFlex from "./ProductFlex";
import { requestProducts } from "@/utils/requests";

const SpeakersSection = () => {
  const products = requestProducts();
  const speakers = products.filter(
    (product) => product.category === "speakers"
  );
  return (
    <div>
      <div className={styles.titleOuterWrapper}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Speakers</h2>
        </div>
      </div>
      <section className={styles.sectionOuterWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionFlex}>
            <ProductFlex
              newProduct={true}
              order={1}
              productDetails={speakers[1]}
              seeProductButton={true}
              imagePath={speakers[1].categoryImage.desktop}
              imageTablet={speakers[1].categoryImage.tablet}
              imageMobile={speakers[1].categoryImage.mobile}
            />
            <ProductFlex
              newProduct={false}
              order={0}
              productDetails={speakers[0]}
              seeProductButton={true}
              imagePath={speakers[0].categoryImage.desktop}
              imageTablet={speakers[0].categoryImage.tablet}
              imageMobile={speakers[0].categoryImage.mobile}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakersSection;
