# 실전 프로젝트 - 클라이언트 레벨 데이터 호출 vs 서버 레벨 데이터 호출

## getServerSideProps와 useEffect 데이터 호출 방식 차이점
- "언제, 어디서, 누구를 위해 데이터를 가져오느냐" 차이

### 실행 위치 & 시점
| 구분    | getServerSideProps  | useEffect       |
| ----- | ------------------- | --------------- |
| 실행 위치 | **서버**              | **브라우저(클라이언트)** |
| 실행 시점 | **요청마다 페이지 렌더링 전에** | **렌더링 후**       |
| 실행 주체 | Node.js (Next 서버)   | React (브라우저)    |

### 흐름 비교
#### getServerSideProps
```shell
요청 → 서버에서 데이터 fetch → HTML 생성 → 브라우저 전달
```

#### useEffect
```shell
HTML 먼저 표시 → JS 실행 → 데이터 fetch → 화면 업데이트
```