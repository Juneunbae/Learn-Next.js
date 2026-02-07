import React from "react";

export default function ProductInfo({ productDetail }) {
  return (
    <div>
      <div>
        <img src={productDetail.imageUrl} alt="" />
      </div>
      <p>{productDetail.name}</p>
      <p>{productDetail.price}</p>
    </div>
  );
}
