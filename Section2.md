# 설정 파일편

## package.json
```
"scripts" : {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "eslint"
}
```
- Custom Script 명령어
- 프로젝트에서 사용할 명령어를 미리 지정해두는 곳

## package-lock.json
- 자동으로 생성되는 파일
- `package.json`에 기록된 라이브러리를 설치할 때 각각의 패키지 매니저들이 알아서 관리해주는 파일

## next.config.mjs
- next 설정 파일 
- next 프로젝트에 대한 전반적인 설정을 넣을 수 있는 TypeScript로 되어있는 파일

## exlintrc.json
- 코드 문법을 검사해주는 파일