# RPG 시스템을 반영한 웹 어플리케이션

## 1. 개요
RPG 시스템을 반영한 웹 커뮤니티 작성을 목표로 한다.

### 1) 기능
- 로그인(Twitter & 비회원)
- 상점 (구매 / 판매 / 선물)
- 랜덤뽑기 (등급 C ~ SSS)
- 아이템 조합, 강화 기능
- 캐릭터 스테이터스 (스텟포인트)
- 캐릭터 아이템 착용 (무기 / 방어구 / 악세서리)

## 2. 사용 기술 및 라이브러리
react  
1. create-react-app  
2. styled-components (npm i styled-components)  
3. react-icons (npm i react-icons)  
4. react-router-dom (npm i react-router-dom)  
5. redux (npm i redux)
6. react-redux (npm i react-redux)
7. @redux-devtools/extension (npm i @redux-devtools/extension)
8. persist-redux (npm i redux-persist)
9. redux-logger (npm i redux-logger)


Database & Twitter Authentication
- firebase (npm install firebase)

## 2. github 규칙
1. branch 네이밍 규칙 : "수정항목_구체적내용"  
`예) fix_styling_todolist_component` 
2. commit 메시지 규칙 : "수정항목 > 구체적인내용 - 추가설명"  
`예) add > Function of Insert Todo item`  

[표1] 구체적인 수정 항목

|항목|내용|
|------|---|
|add|기능, 환경설정 등 새로운 내용이 추가되었을 때에 사용|
|modified|기능, 환경설정 등의 내용이 변경되었을 때에 사용|
|styling|디자인 및 스타일 설정 및 변경 시에 사용|
|fix|버그 수정 관련 내용에 사용|
|test|테스트 케이스 추가 및 유닛테스트 추가 등 테스트 관련 내용에 사용|
