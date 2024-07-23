import React from "react";
import styles from "@/components/styles/EarphonesSection.module.css";
import ProductFlex from "./ProductFlex";
import yx1Earphones from "@/public/images/product-yx1-earphones/desktop/image-product.jpg";

const EarphonesSection = () => {
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
              title={"YX1 Wireless Earphones"}
              description={
                "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature."
              }
              imagePath={yx1Earphones}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarphonesSection;
