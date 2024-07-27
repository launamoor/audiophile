"use client";
import React from "react";
import styles from "@/components/styles/HeadphonesMark2Section.module.css";
import ProductFlex from "./ProductFlex";
import { requestProducts } from "@/utils/requests";

const HeadphonesMark2Section = () => {
  const products = requestProducts();
  const headphones = products.filter(
    (product) => product.category === "headphones"
  );
  return (
    <>
      <div className={styles.titleOuterWrapper}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Headphones</h2>
        </div>
      </div>
      <section className={styles.sectionOuterWrapper}>
        <div className={styles.container}>
          <div className={styles.sectionFlex}>
            <ProductFlex
              newProduct={true}
              order={1}
              title={headphones[2].name}
              description={headphones[2].description}
              imagePath={headphones[2].image.desktop}
              seeProductButton={true}
              productNumber={headphones[2].id}
            />
            <ProductFlex
              newProduct={false}
              order={0}
              title={headphones[1].name}
              description={headphones[1].description}
              imagePath={headphones[1].image.desktop}
              seeProductButton={true}
              productNumber={headphones[1].id}
            />
            <ProductFlex
              newProduct={false}
              order={1}
              title={headphones[0].name}
              description={headphones[0].description}
              imagePath={headphones[0].image.desktop}
              seeProductButton={true}
              productNumber={headphones[0].id}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeadphonesMark2Section;
