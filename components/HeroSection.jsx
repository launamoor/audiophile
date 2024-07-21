import React from "react";
import styles from "@/components/styles/HeroSection.module.css";
import Image from "next/image";
import heroImage from "@/public/images/home/desktop/image-hero-exported.jpg";

const HeroSection = () => {
  return (
    <section className={styles.outerWrapper}>
      <div className={styles.container}>
        <div className={styles.innerWrapper}>
          <div className={styles.heroTextbox}>
            <p className={styles.heroNewProduct}>New Product</p>
            <h1 className={styles.heroTitle}>XX99 Mark II Headphones</h1>
            <p className={styles.heroText}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className={styles.heroButton}>See Product</button>
          </div>
          <div className={styles.heroImgDiv}>
            <Image
              className={styles.heroImg}
              src={heroImage}
              alt="Headphones"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
