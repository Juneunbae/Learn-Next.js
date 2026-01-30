import React from "react";

export default function ProductDetailPage() {
  return <div>ProductDetailPage</div>;
}

export async function getServerSideProps(context) {
  // /products/15
  console.log(context.params.productId);
}
