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

#### QueryReference
1. firestore.doc("/users/:userId");
    - set, get, update, delete
    - documentSnapshot -> 단일 로우
2. firestore.collection("/users");
    - add, get
    - querySnapshot -> 부모! 테이블

### redux 추가
1. 예측 가능한 상태 관리
    - 단방향 flux
    - one big state
    - state is read only
    - changes using pure function
2. action -> root reducer -> store -> dom change
3. action -> dispatcher -> store -> view
    
## The Job of a react develop
1. decide on components
2. decide ths state and where it lives
3. what changes when state changes

## deploy with heroku
```bash
#https://devcenter.heroku.com/articles/heroku-cli
brew tap heroku/brew && brew install heroku
npm install -g heroku
heroku --version
heroku login
heroku login -i
cd ~/myapp
heroku create app-name --buildpack mars/create-react-app
git push heroku <branch>:master
```

## css in jsgit 
## HOC
1. 추가적인 기능을 부착 시킬 수 있다! 

## observables, observers
1. Observable - stream
o -> o -> o -> o -> 

## redux - saga
1. condition run function!! nice 
2. generator function
    - Async Await is actually built on top of generators
    ```js
    function* gen(i){
        yield i;
        yield i + 10;
    }
    const g= gen(5);
    g.next(); // {value: undefined, done: true}
    
    while(!g.done){
        g.next()
    }

    ```
3. take, takeEvery, takeLatest
    - take <- it's not gonna start again when it's done 
    - takeEvery <- it's again forevery as new take = regenerator ( take + while(true) ) 
    - takeLatest <- it kills(cancel!! nice!) previous tast and start current task ( setTimeout, only lastest on do!!) 


# PWA 적용하기
