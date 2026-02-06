import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
});

// 상품 목록을 조회하는 API 함수
function fetchProducts() {
  return instance.get("/products");
}

export { instance, fetchProducts };
