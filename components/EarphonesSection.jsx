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
              title={earphones[0].name}
              description={earphones[0].description}
              imagePath={earphones[0].image.desktop}
              seeProductButton={true}
              productNumber={earphones[0].id}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EarphonesSection;
