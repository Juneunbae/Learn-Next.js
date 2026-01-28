import ProductList from "@/components/ProductList";

// "/" 에 해당하는 컴포넌트
function ProductPage() {
  return (
    <div>
      <h1>상품목록 페이지</h1>
      <ProductList></ProductList>
    </div>
  );
}

/**
 * 1. 상품 목록 페이지 - '/'
 * 2. 장바구니 페이지 - '/products/productId'
 * 3. 장바구니 페이지 - '/cart'
 */

export default ProductPage;
