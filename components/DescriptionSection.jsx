import React from "react";
import styles from "@/components/styles/DescriptionSection.module.css";

const DescriptionSection = () => {
  return (
    <section className={styles.outerWrapper}>
      <div className={styles.container}>
        <div className={styles.innerWrapper}>
          <div className={styles.textbox}>
            <h2 className={styles.title}>
              Bringing you the <span style={{ color: "#D87D4A" }}>best</span>{" "}
              audio gear
            </h2>
            <p className={styles.description}>
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <div className={styles.imgDiv}></div>
        </div>
      </div>
    </section>
  );
};

export default DescriptionSection;
