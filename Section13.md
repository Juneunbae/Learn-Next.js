# 실전 프로젝트 - 데이터 갱신과 API Route

## 장바구니 목록 데이터 갱신된 흐름과 브라우저 페이지 히스토리 설명

### router.push
```javascript
router.push("/login")
```
- 현재 페이지 -> 히스토리 남김
- 뒤로 가기 누르면 이전 페이지로 돌아감

#### ex.
```javascript
/home -> push -> /login
```
- 뒤로 가기 -> home

### router.replace
```javascript
router.replace("/login")
```
- 현재 페이지를 교체
- 히스토리에 이전 페이지가 남지 않음
#### ex.
```javascript
/login (로그인 완료 후) -> replace -> /main
```
- 뒤로가기 -> 로그인 화면 안 감

### router.push vs router.replace
|구분|router.push|router.replace|
|---|---|---|
|히스토리 저장|O|X|
|뒤로가기 기능|가능|불가능|
|사용 목적|일반 이동|현재 페이지 대체|

### 언제 뭘 쓰는지?
#### push 사용
- 게시글 상세 보기
- 페이지 이동
- 검색 결과 이동

#### replace 사용하는 경우
- 로그인 후 리다이렉트
- 권한 없어서 강제 이동
- 에러 페이지 이동
- 필터/쿼리만 교체