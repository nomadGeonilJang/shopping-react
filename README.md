# react project - shopping mall 

## install & start
```bash
npm install or yarn
npm start
```

## main
0. react, react-router-dom, typescript
1. node-sass
2. styled-component

### Routing in React
1. react-router-dom
    - use history api
    - history, location, match
        - match : url, path, params
```bash
npm i react-router-dom @types/react-router-dom
```

### firebase
1. 백엔드 구축을 별도로 하지 않고 api를 사용하고자 해서 사용합니다.
to make backend way
![hello](https://i.ibb.co/8PGZcB2/2021-03-03-12-47-19.png)

2. 설치하기
```bash
npm install --save firebse
```
3. 프로젝트 만들기.
4. setup 하고 google enable

### redux 추가
1. 예측 가능한 상태 관리
    - 단방향! flux
    - one big state
    - state is read only
    - changes using pure function
2. action -> root reducer -> store -> dom change
3. action -> dispatcher -> store -> view
    