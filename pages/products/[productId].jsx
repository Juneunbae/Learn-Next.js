import ProductHeader from "@/components/ProductHeader";
import React from "react";
import axios from "axios";

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ msg, productInfo }) {
  const headerTitle = "상품 상세 정보 페이지";

  return (
    <div>
      <ProductHeader title={headerTitle}></ProductHeader>
      <div>ProductDetailPage - {msg}</div>
      <p>{productInfo.name}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  // /products/15
  console.log(context.params.productId);
  const id = context.params.productId;
  const response = await axios.get(`http://localhost:4000/products/${id}`);

  return {
    props: {
      msg: "서버  데이터",
      productInfo: response.data,
    },
  };
}
