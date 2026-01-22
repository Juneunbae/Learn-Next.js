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

# 폴더편

## node_modules
- `package.json` 내 dependencies와 devDependencies를 바탕으로 설치된 결과들이 저장되어 있는 폴더

## public
- 정적 리소스(이미지, 아이콘 등 웹페이지를 표시하는데 필요한 자원)를 배치하는 공간

## pages
- pages 하위 js 파일 내부에 소스코드가 들어가있는 공간

## styles
- 애플리케이션과 관련된 스타일 폴더가 들어가는 공간

## .next
- next 내부적으로 실행했을 때 결과물을 자동으로 생성해주는 폴더