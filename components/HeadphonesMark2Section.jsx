import React from "react";
import styles from "@/components/styles/HeadphonesMark2Section.module.css";
import ProductFlex from "./ProductFlex";
import markTwoHeadphones from "@/public/images/product-xx99-mark-two-headphones/desktop/image-product.jpg";
import markOneHeadphones from "@/public/images/product-xx99-mark-one-headphones/desktop/image-product.jpg";
import xxHeadphones from "@/public/images/product-xx59-headphones/desktop/image-product.jpg";

const HeadphonesMark2Section = () => {
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
              title={"XX99 Mark II Headphones"}
              description={
                "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
              }
              imagePath={markTwoHeadphones}
            />
            <ProductFlex
              newProduct={false}
              order={0}
              title={"XX99 Mark I Headphones"}
              description={
                "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
              }
              imagePath={markOneHeadphones}
            />
            <ProductFlex
              newProduct={false}
              order={1}
              title={"XX59 Headphones"}
              description={
                "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
              }
              imagePath={xxHeadphones}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeadphonesMark2Section;
