import React from "react";

// 상품 상세 정보 페이지 컴포넌트
export default function ProductDetailPage({ msg }) {
  return <div>ProductDetailPage - {msg}</div>;
}

export async function getServerSideProps(context) {
  // /products/15
  console.log(context.params.productId);

  return {
    props: { msg: "서버  데이터" },
  };
}
