import React from "react";
import styles from "@/components/styles/ProductSection.module.css";
import GoBackButton from "./GoBackButton";
import Image from "next/image";
import YouMayAlsoLikeItem from "./YouMayAlsoLikeItem";

const ProductSection = ({
  children,
  featuresText,
  features,
  gallery,
  others,
}) => {
  return (
    <section className={styles.outerWrapper}>
      <div className={styles.innerWrapper}>
        <GoBackButton />
        <div className={styles.layoutFlex}>
          {children}
          <div className={styles.featuresGrid}>
            <h3 className={styles.featuresTextTitle}>Features</h3>
            <div className={styles.featuresText}>
              {featuresText.split("\n").map((part, i) => (
                <p key={i}>{part}</p>
              ))}
            </div>
            <h3 className={styles.featuresListTitle}>In the box</h3>
            <div className={styles.featuresList}>
              {features.map((feature, i) => (
                <div key={i} className={styles.featuresListRow}>
                  <div className={styles.amount}>{feature.quantity}x</div>
                  <div className={styles.listItem}>{feature.item}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.galleryGrid}>
          <div className={styles.gridCell1}>
            <Image
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
              src={gallery.first.desktop}
              alt="Product's grid image"
            />
          </div>
          <div className={styles.gridCell2}>
            <Image
              width={500}
              height={300}
              style={{ width: "100%", height: "auto" }}
              src={gallery.second.desktop}
              alt="Product's grid image"
            />
          </div>
          <div className={styles.gridCell3}>
            <Image
              width={635}
              height={592}
              src={gallery.third.desktop}
              alt="Product's grid image"
            />
          </div>
        </div>
        <div className={styles.youMayAlsoLikeFlex}>
          {others.map((item, i) => (
            <YouMayAlsoLikeItem key={i} product={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
