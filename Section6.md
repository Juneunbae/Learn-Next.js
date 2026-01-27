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