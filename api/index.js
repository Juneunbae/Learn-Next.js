import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

// 상품 목록을 조회하는 API 함수
function fetchProducts() {
  return instance.get("/products");
}

// 특정 상품 상세 정보를 조회하는 API 함수
function fetchProductById(id) {
  return instance.get(`/products/${id}`);
}

// 장바구니에 아이템을 추가하는 API 함수
function createCartItem({ id, name, imageUrl, price }) {
  return instance.post("/carts", {
    id,
    name,
    imageUrl,
    price,
  });
}

// 장바구니 목록을 들고오는 API 함수
function fetchCarts() {
  return instance.get("/carts");
}

function removeCartItem(id) {
  return instance.delete(`/carts/${id}`);
}

export {
  fetchProducts,
  fetchProductById,
  createCartItem,
  fetchCarts,
  removeCartItem,
};
