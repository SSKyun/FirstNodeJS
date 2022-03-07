# 2. 노드를 위해 알아야 할 자바스크립트 문법

## 2.1 ES2015+: ES6+
ECMAScript 2015년 버전 이후 엄청난 변화
최신문법 알아야 노드 소스코드 이해 가능

### 2.1.1 const, let
- old : var로 변수 선언
    함수 스코프(변수 사용가능 범위)
    --> 호이스팅 문제 발생
        Hoisting: 선언된 변수 또는 정의된 함수가 블록 시작하는 곳으로
            모두 올라가서 선언처리 되는 것.
- new : const, let을 사용
    블록 스코프(변수 사용가능 범위)
    블록: {~}
    선언이후에 사용가능
```js
if(true){
    var x = 3;
}
console.log(x); //anonymous 함수내

if(true){
    const y = 3;
    let z = 3;
}
//console.log(y); // if블록내에 외부에서 사용시도--Error
console.log(z); // if블록내에 외부에서 사용시도--Error
```
## *노드 실행법*
1. node REPL에서 실행.(Python의 IDLE와 유사)
    node REPL 실행 (Read - Eval - Print Loop)
        cmd에서 node 입력--> prompt가 '>'로 변경
    소스코드 입력
    종료: Ctrl+C 2회 입력, .exit+Enter

2. cmd(powershell)에서 실행.
    - node '실행시킬 JS 파일명'
    - node .\ch02.js

### const vs let
- const: 최초 한번 초기화 후 재할당 불가
    - 선언시 동시에 초기화 필수.
- let: 초기화 이후 재할당가능

```js
 const a = 0;
// a = 1; //재할당 불가 : error

 let b = 0;
 b = 1; //재할당 가능

 //const c; //선언시 최초할당 필수(선언과 초기화 함께해야함.) error
```

#### 저자의 사용 권장
-일반적으로 const로 사용, 여러번 변경될 변수 let으로 사용

### 2.1.2 Template String(템플릿 문자열)
* 백틱(`)으로 만든 문자열
    - 문자열내에서 변수를 사용가능
    - `${변수명 또는 간단한JS코드}`