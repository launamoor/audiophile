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
              title={speakers[1].name}
              description={speakers[1].description}
              imagePath={speakers[1].image.desktop}
              seeProductButton={true}
              cart={false}
              productNumber={speakers[1].id}
            />
            <ProductFlex
              newProduct={false}
              order={0}
              title={speakers[0].name}
              description={speakers[0].description}
              imagePath={speakers[0].image.desktop}
              seeProductButton={true}
              cart={false}
              productNumber={speakers[0].id}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakersSection;
