import React from "react";
import styles from "@/components/styles/YouMayAlsoLikeItem.module.css";
import Link from "next/link";
import Image from "next/image";
import { requestProducts } from "@/utils/requests";

const YouMayAlsoLike = ({ product }) => {
  const products = requestProducts();
  const toProduct = products.filter((item) => item.slug === product.slug);
  return (
    <div className={styles.outerWrapper}>
      <div className={styles.imgDiv}>
        <Image fill alt={toProduct[0].name} src={product.image.desktop} />
      </div>
      <h5 className={styles.title}>{product.name}</h5>
      <Link href={`/product/${toProduct[0].id}`} className={styles.buttonDiv}>
        See Product
      </Link>
    </div>
  );
};

export default YouMayAlsoLike;
