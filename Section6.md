# 실전 프로젝트로 배우는 React 기본 문법

## 리액트 문법만으로 화면에 데이터 표시하기

### `axios`
- 웹 브라우저와 Node.js 환경 모두에서 사용되는 Promise 기반의 HTTP 통신 라이브러리
- 프론트엔드와 백엔드 서버 간에 데이터를 주고받는 HTTP 요청(GET, POST 등)을 쉽고 편리하게 처리하도록 돕는 도구

### 설치
```terminaloutput
npm i axios
```

### Promise
- "A promise is an object that may produce a single value some time in the future"
- `Promise`는 자바스크립트 비동기 처리에 사용되는 객체
- 자바스크립트의 비동기 처리 = "특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성

### Promise가 왜 필요한가요?
- Promise는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용
- API가 실행되면 "데이터 하나 보내주세요" 라는 요청을 보냄
- 그런데 데이터를 받아오기도 전에 마치 데이터를 다 받아온 것 마냥 화면에 표시하려고 하면 오류가 발생하거나 빈 화면이 나타남
- 이 문제를 해결하기 위한 방법 중 하나가 `Promise`

### Promise 구조 & 상태
- `Promise`는 3가지 상태(state)를 가짐
1. Pending : 아직 결과가 나오지 않은 상태
2. Fulfilled : 비동기 작업이 성공해 결과가 있는 상태
3. Rejected : 비동기 작업이 실패한 상태

## useState와 useEffect 소개 및 상품 목록 표시

### useState
- `useState`는 컴포넌트에서 화면에 표시할 상태들을 정의할 때 사용

### useEffect
- `useEffect`는 컴포넌트가 렌더링되자마자 실행되는 로직들
- 현재는 서버에 있는 데이터를 불러와서 화면에 그리기 위한 상태로 연결하기 위해서 useEffect 사용

## 상품 목록 컴포넌트화 및 components 폴더 소개

### components 이점
- 페이지 컴포넌트 관점에서 UI 영역별로 컴포넌트가 분리가 되기 때문에 로직들이 컴포넌트 단위 별로 나눠지게 된다.
- 따라서 나중에 해당 컴포넌트에 에러가 발생했을 경우, 에러가 난 컴포넌트만 보면 되는 이점이 있다.

### ex
```javascript
// index.jsx

function ProductPage() {
    return (
        <div>
            <h1>상품목록 페이지</h1>
            <ProductList></ProductList>
        </div>
    );
}
```

```javascript
// ProductList.jsx

function ProductList() {
    const [products, setProducts] = useState();

    useEffect(() => {
        axios.get("http://localhost:4000/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    console.log(products);

    return (
        <ul>
            {products &&
                products.map((product) => {
                    return <li key={product.id}>{product.name}</li>;
                })}
        </ul>
    );
}
```
- 위처럼 사용은 `<컴포넌트명></컴포넌트명>` 형식으로 가능하다