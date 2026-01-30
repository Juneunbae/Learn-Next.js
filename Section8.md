# 실전 프로젝트 - 동적 라우팅과 데이터 호출

## 상품 상세 정보 페이지의 라우팅 구성

### [productId].jsx
- 파일 이름에 대괄호`[]`가 붙어있으면 동적 라우팅

## 동적 라우팅 소개

### 동적 라우팅
- 동적 라우팅(Dynamic Routing)이란 `pages` 폴더 밑에 다음과 같이 파일을 작명하여 여러 URL 값을 대응할 수 있게 하는 방법

```shell
pages/
    users/
        [id].js 
```
- `users/1` `users/20` 등으로 접근 가능
- `pages` 폴더 밑에 파일 이름을 `[단어]`형태로 작성하면 해당 경로에 어떤 URL이 오든 매칭
- 동적 라우팅은 같은 성격의 페이지에서 아이디나 특정 구분 값으로 페이지의 정보를 약간 다르게 표시할 때 사용
- 구현하는 개발자 입장에서는 사용자가 정확하게 어떤 URL을 입력할지 알수 없기 때문에 사용자가 URL을 입력한 시점에 URL 값으로 페이지 정보를 구분

## `getServerSideProps` 소개

### `getServerSideProps`
- `getServerSideProps`는 페이지 컴포넌트를 그리기 전에 데이터를 받아오기 위한 데이터 호출 메서드
- `getStaticProps`와 다르게 HTTP Header, URL QueryString 등의 정보를 접근할 수 있어 더 일반적으로 많이 사용
- `getServerSideProps`는 사용자의 요청을 받은 애플리케이션 실행 시점에 로직이 실행
```jsx
export async function getServerSideProps() {
    const res = await fetch('http://my.api/users/1')
    const user = await res.json()
    return { props : { user } }
}

export default function LoginPage({ repo }) {
    return (
        <div>{user.name}</div>
    )
}
```
- 위 코드는 사용자가 `/login`이라는 URL을 접근했을 때 사용자 정보를 받아와 페이지 컴포넌트에 `user`라는 값을 props로 넘겨주는 코드
- 이 코드는 서버에서 실행되기 때문에 브라우저에서는 사용자 정보가 포함된 HTML 파일을 바로 그릴 수 있음

### `getServerSideProps` 특징
1. `getServerSideProps` 메서드는 서버에서 실행됩니다. 따라서, 아래와 같이 메서드 내에서 브라우저 API를 접근할 수 없다.
```jsx
// pages/login.jsx

export async function getServerSideProps() {
    const userAgent = window.navigator.userAgent; // 서버에서는 window 객체를 접근할 수 없어 에러 발생
}

export default function LoginPage({ repo }) {
    // ...
}
```

2. `getServerSideProps` 메서드는 다른 데이터 호출 메서드와 마찬가지로 페이지 컴포넌트에서만 사용할 수 있다.
```jsx
export async function getServerSideProps(context) {
    // 일반 컴포넌트에서는 유효하지 않은 메서드
}

export default function LoginHeader() {
    // ...
}
```

3. `getServerSideProps` 메서드에서 동적 라우팅 URL 값과 헤더는 다음과 같은 방식으로 접근
```jsx
// pages/product/[productId].jsx

export async function getServerSideProps(context) {
    context.params.productId // `product/1`이라는 URL로 접근했을 때, productId 값은 1
    context.req.headers['user-agent'] // 사용자의 접속 디바이스 정보(userAgent) 값
}
```

### `getServerSideProps` 파라미터
- `getServerSideProps` 메서드의 첫 번째 파라미터는 `context` 파라미터
- 이 파라미터는 params, req, res, query 등 여러 속성 값을 접근할 수 있다.