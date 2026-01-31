import ProductList from "@/components/ProductList";
import ProductHeader from "@/components/ProductHeader";

// "/" 에 해당하는 컴포넌트
function ProductPage() {
  const headerTitle = "상품 목록 페이지";

  return (
    <div>
      <ProductHeader title={headerTitle}></ProductHeader>
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
