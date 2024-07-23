import React from "react";
import styles from "@/components/styles/SpeakersSection.module.css";
import ProductFlex from "./ProductFlex";
import zx9Speaker from "@/public/images/product-zx9-speaker/desktop/image-product.jpg";
import zx7Speaker from "@/public/images/product-zx7-speaker/desktop/image-product.jpg";

const SpeakersSection = () => {
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
              title={"ZX9 Speaker"}
              description={
                "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups."
              }
              imagePath={zx9Speaker}
            />
            <ProductFlex
              newProduct={false}
              order={0}
              title={"ZX7 Speaker"}
              description={
                "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
              }
              imagePath={zx7Speaker}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpeakersSection;
