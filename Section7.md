# 실전 프로젝트 - Image 컴포넌트와 Next.js 스타일링 방법

## 상품 목록 UI 구성 및 Image 컴포넌트 소개

### CDN(Content Delivery Network)
- 웹 페이지에 필요한 자원(Js, CSS, 이미지 등)을 제공하는 서버

## Next.js의 CSS 스타일링 방법 - CSS Module

### CSS Module
- CSS 모듈 방식은 웹 개발 초창기의 전역 스타일 시트(Global Stylesheets) 방식과 다르게 리액트 컴포넌트 별로 CSS 스타일 적용 범위를 국한하여 스타일링 하는 방식
- 참고로 전역 스타일 시트 방식은 하나의 HTML 파일에 하나의 CSS 파일을 로딩하여 스타일링하는 방식
- CSS 모듈 방식으로 스타일링하려면 특정 컴포넌트에 해당되는 스타일 시트를 `컴포넌트명.module.css` 파일로 작성
```css
/*button.module.css*/

.primary {
    color: blue;
}
```
```jsx
// Button.jsx

import styles from './button.module.css'

export function Button() {
    return <button className={styles.primary}>Hello</button>
}
```

### CSS-in-JS
- CSS in JS 방식은 CSS 스타일을 별도의 스타일 시트로 관리 하지 않고 JS 파일에 작성하는 방식
- 흔히 리액트 프로젝트를 하면 이모션(Emotion), 스타일드 컴포넌트(styled Component)와 같은 CSS-in-JS 라이브러리를 사용하는데 Next에서도 동일하게 이 라이브러리를 사용할 수 있음
```jsx
function Button() {
    return <button style={{ color: 'blue' }}>Hello</button>
}
```
- `CSS-in-JS` 방식 코드
- style 속성에 스타일 값을 적용할 때 `{{}}` 중괄호가 2번 들어감
- 첫 번째 중괄호는 `style` 속성에 자바스크립트 값을 연결하겠다는 의미이고, 두 번째 중괄호는 CSS 스타일 값을 객체로 정의한 것
```javascript
function Button() {
    const buttonStyle = { color: 'blue' };
    return <button style={buttonStyle}>Hello</button>
}
```
- 이처럼 CSS-in-JS 방식을 이용하면 자바스크립트로 CSS 스타일 코드를 작성할 수 있음