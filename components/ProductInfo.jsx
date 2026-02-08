import React from "react";
import styles from "./ProductInfo.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { createCartItem } from "@/api";

export default function ProductInfo({ productDetail }) {
  const router = useRouter();

  const addCart = async () => {
    // 1. 장바구니에 아이템을 담는 API 함수 호출
    // 2. 장바구니 페이지로 이동
    const response = await createCartItem(productDetail.id, productDetail.name);
    console.log(response);
    alert("장바구니에 추가됨");
    await router.push("/cart");
  };

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
        <button onClick={addCart}>장바구니에 담기</button>
      </div>
    </div>
  );
}
