import ProductHeader from "@/components/ProductHeader";
import React from "react";
import { fetchProductById } from "@/api";
import ProductInfo from "@/components/product-detail/ProductInfo";

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ productDetail }) {
  const headerTitle = "상품 상세 정보 페이지!";

  return (
    <div>
      <ProductHeader title={headerTitle}></ProductHeader>
      <ProductInfo productDetail={productDetail}></ProductInfo>
    </div>
  );
}

export async function getServerSideProps(context) {
  // /products/15
  const id = context.params.productId;
  const { data } = await fetchProductById(id);

  return {
    props: {
      productDetail: data,
    },
  };
}
