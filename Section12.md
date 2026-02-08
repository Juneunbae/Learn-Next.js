# 실전 프로젝트 - 장바구니 페이지 구현

## 디스트럭처링, 객체 축약 문법, 함수 파라미터 작성 팁

### 향상된 객체 리터럴
- **향상된 객체 리터럴**이란 기존 자바스크립트에서 사용하던 객체 정의 방식을 개선한 문법
- 자주 사용하던 문법들을 좀 더 간결하게 사용할 수 있도록 객체 정의 형식을 바꿈

#### 기존 객체 정의 방식
```javascript
var josh = {
    language: 'javascript',
    coding: function () {
        console.log('Hello World');
    }
}
```

#### 축약 문법 1 - 속성과 값이 같으면 1개만 기입
- 객체를 정의할 때 속성(property)와 값(value)이 같으면 아래와 같이 축약이 가능
```javascript
var language = 'javascript';

var josh = {
    language
}

console.log(josh) // {lauguage: "javascript"}
```
- 컴포넌트 뷰 등록 방식에서의 축약 문법
```javascript
const myComponent = {
    template: '<p>My Component</p>'
};

new Vue({
    component: {
        // myComponent: myComponent
        myComponent
    }
});
```

- 라우터 등록 방식에서의 축약 문법
```javascript
const router = new VueRouter({
    // ...
});

new Vue({
    // router: router
    router
});
```

#### 축약 문법 2 - 속성에 함수를 정의할 때 function 예약어 생략
- 기존 객체를 정의할 때 객체의 속성에 함수를 연결하여 사용하는 경우가 빈번
```javascript
const josh = {
    // 속성: 함수
    coding: function () {
        console.log('Hello World');
    }
};

josh.coding(); // Hello World
```
- 기능이 많다면 정의해야할 부분이 너무 많으므로, ES6에서 축약하는 것을 추천
```javascript
const josh = {
    coding() {
        console.log('Hello World');
    }
};

josh.coding(); // Hello World
```