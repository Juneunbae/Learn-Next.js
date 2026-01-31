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

## 디스트럭처링 문법과 props 실습 안내

### 구조 분해 문법(Destructuring)
- `디스트럭처링`은 ES6 문법은 한글로 번역하면 '구조 분해 문법'

#### 기존 자바스크립트에서의 '구조'
```javascript
var arr = [1, 2, 3, 4];
var obj = {
    a: 10,
    b: 20,
    c: 30
}
```
- 전형적인 객체, 배열 선언 방식
- 왼쪽에 변수 이름을 넣고 오른쪽에 데이터 타입을 선언
- '구조'라는 단언느 이러한 선언 형식을 의미

#### 그럼 '구조 분해'란?
```javascript
var { a, b, c } = obj;
```
- 이러한 변수 선언 형식이 위처럼 자유로워지는 것을 의미
- 변수에 중괄호를 씌우는 것 자체가 어색하고 낯설기만 함
- 기존 자바스크립트라면 오류를 내겠지만 출력해보면 제대로 동작
```javascript
console.log(a); 
// 10

console.log(b);
// 20

console.log(c);
// 30
```

#### 특정 객체의 값을 꺼내오는 방법
- 그럼 어디다가 쓰려고 만든 것일까?
```javascript
var josh = {
    language: 'javascript',
    position: 'front-end',
    area: 'pangyo',
    hobby: 'singing',
    age: '102'
};

var language = josh.language;
var position = josh.position;
var area = josh.area;
var hobby = josh.hobby;
var age = josh.age;
```
- 기존 자바스크립에서는 특정 객체의 값을 꺼낼 때 보통 이렇게 구현
- 객체의 특정 속성 값을 꺼내올 때마다 일일이 변수를 하나 생성하고 담아줘야함
- 꺼내야 할 속성이 많으면 많을수록 새로운 변수를 생성하고 대입하는 식의 반복 작업을 계속했어야했다

#### 구조 분해 문법을 적용하면 더 간편하게 꺼낼 수 있다
```javascript
var josh = {
    language: 'javascript',
    position: 'front-end',
    area: 'pangyo',
    hobby: 'singing',
    age: '102'
};

var { language, position, area, hobby, age } = josh;
console.log(language); // javascript
console.log(position); // front-end
console.log(area); // pangyo
console.log(hobby); // singing
console.log(age); // 102
```
- 이렇게 구조 분해 문법을 사용하면 코드 라인 숫자를 줄일 수 있고, 이 문법이 익숙해지면 전체적으로 코드가 더 간결해짐

### 뷰엑스에 적용하는 구조 분해 문법
- 구조 분해 문법을 활용하기 가장 좋은 곳은 바로 뷰엑스의 'actions 속성'
- 뷰엑스의 actions 속성들은 모두 context라는 인자를 받는다
- 그리고 context의 commit API를 반드시 호출

```vue
actions: {
    fetchData(context) {
        context.commit('addProducts');
    }
}
```
- 여기서 구조 분해 문법을 적용하면 바꿀 수 있다
```vue
actions: {
    fetchData({ commit }) {
        commit('addProducts');
    }
}
```
- 어떻게 가능한가?
```javascript
var context = {
    commit: actionName => console.log(actionName + ' has been committed!!')
};
```
- 구조 분해 문법을 적용하면 다음과 같은 결과가 나타난다
```javascript
var { commit } = context;
commit('addProducts'); // addProducts has been committed!!
```