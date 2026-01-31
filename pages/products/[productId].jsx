import React from "react";
import ProductHeader from "@/components/ProductHeader";

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ msg }) {
  const headerTitle = "상품 상세 정보 페이지";
  return (
    <div>
      <ProductHeader title={headerTitle}></ProductHeader>
      <div>ProductDetailPage - {msg}</div>
    </div>
  );
}

export async function getServerSideProps(context) {
  // /products/15
  console.log(context.params.productId);

  return {
    props: { msg: "서버  데이터" },
  };
}
