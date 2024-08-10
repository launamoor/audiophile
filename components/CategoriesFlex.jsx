import React from "react";
import styles from "@/components/styles/CategoriesFlex.module.css";
import CategoryButton from "./CategoryButton";
import headphones from "@/assets/images/shared/desktop/image-category-thumbnail-headphones.png";
import speakers from "@/assets/images/shared/desktop/image-category-thumbnail-speakers.png";
import earphones from "@/assets/images/shared/desktop/image-category-thumbnail-earphones.png";

const CategoriesFlex = ({ style, layout, mobileView, handleToggle }) => {
  return (
    <section style={style} className={styles.outerWrapper}>
      <div className={styles.container}>
        <div style={layout} className={styles.innerWrapper}>
          <CategoryButton
            onClick={mobileView ? handleToggle : null}
            image={headphones}
            category={"Headphones"}
          />
          <CategoryButton
            onClick={mobileView ? handleToggle : null}
            image={speakers}
            category={"Speakers"}
          />
          <CategoryButton
            onClick={mobileView ? handleToggle : null}
            image={earphones}
            category={"Earphones"}
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesFlex;
