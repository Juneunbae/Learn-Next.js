import React from "react";
import styles from "./ProductInfo.module.css";

export default function ProductInfo({ productDetail }) {
  return (
    <div className={styles.container}>
      <div>
        <img src={productDetail.imageUrl} alt="" />
      </div>
      <div className={styles.description}>
        <p>{productDetail.name}</p>
        <p>{productDetail.price}</p>
        <button>장바구니에 담기</button>
      </div>
    </div>
  );
}
