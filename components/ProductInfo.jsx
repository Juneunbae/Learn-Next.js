import React from "react";
import styles from "./ProductInfo.module.css";
import Image from "next/image";

export default function ProductInfo({ productDetail }) {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src={productDetail.imageUrl}
          alt="{productDetail.name}"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.description}>
        <p>{productDetail.name}</p>
        <p>{productDetail.price}</p>
        <button>장바구니에 담기</button>
      </div>
    </div>
  );
}
