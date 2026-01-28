import axios from "axios";
import { useEffect, useState } from "react";

// "/" 에 해당하는 컴포넌트
function ProductPage() {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get("http://localhost:4000/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);

  return (
    <div>
      <h1>상품목록 페이지</h1>
      <ul>
        {products &&
          products.map((product) => {
            return <li key={product.id}>{product.name}</li>;
          })}
      </ul>
    </div>
  );
}

/**
 * 1. 상품 목록 페이지 - '/'
 * 2. 장바구니 페이지 - '/products/productId'
 * 3. 장바구니 페이지 - '/cart'
 */

export default ProductPage;
