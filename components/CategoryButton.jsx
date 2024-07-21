import React from "react";
import styles from "@/components/styles/CategoryButton.module.css";
import iconArrowRight from "@/assets/images/shared/desktop/icon-arrow-right.svg";
import Image from "next/image";
import headphones from "@/assets/images/shared/desktop/image-category-thumbnail-headphones.png";

const CategoryButton = ({ image, category }) => {
  return (
    <button className={styles.button}>
      <div className={styles.buttonFlex}>
        <div className={styles.buttonImgDiv}>
          <Image className={styles.buttonImg} src={image} alt={category} />
        </div>
        <h6>{category}</h6>
        <div className={styles.buttonShop}>
          Shop{" "}
          <span>
            <Image src={iconArrowRight} alt="Right Arrow" />
          </span>
        </div>
      </div>
    </button>
  );
};

export default CategoryButton;
