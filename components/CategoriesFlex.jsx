import React from "react";
import styles from "@/components/styles/CategoriesFlex.module.css";
import CategoryButton from "./CategoryButton";
import headphones from "@/assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "@/assets/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "@/assets/images/shared/desktop/image-category-thumbnail-earphones.png";

const CategoriesFlex = () => {
  return (
    <section className={styles.outerWrapper}>
      <div className={styles.container}>
        <div className={styles.innerWrapper}>
          <CategoryButton image={headphones} category={"Headphones"} />
          <CategoryButton image={speakers} category={"Speakers"} />
          <CategoryButton image={earphones} category={"Earphones"} />
        </div>
      </div>
    </section>
  );
};

export default CategoriesFlex;
