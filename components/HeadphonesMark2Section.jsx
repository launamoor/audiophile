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
              productDetails={headphones[2]}
              seeProductButton={true}
              imagePath={headphones[2].categoryImage.desktop}
              imageTablet={headphones[2].categoryImage.tablet}
              imageMobile={headphones[2].categoryImage.mobile}
            />
            <ProductFlex
              newProduct={false}
              order={0}
              productDetails={headphones[1]}
              seeProductButton={true}
              imagePath={headphones[1].categoryImage.desktop}
              imageTablet={headphones[1].categoryImage.tablet}
              imageMobile={headphones[1].categoryImage.mobile}
            />
            <ProductFlex
              newProduct={false}
              order={1}
              productDetails={headphones[0]}
              seeProductButton={true}
              imagePath={headphones[0].categoryImage.desktop}
              imageTablet={headphones[0].categoryImage.tablet}
              imageMobile={headphones[0].categoryImage.mobile}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeadphonesMark2Section;
