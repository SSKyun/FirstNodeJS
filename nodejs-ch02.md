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

### 2.1.3 객체 리터럴
* 리터럴(Literal) 
  - 구체적인 값
    - 문자 리터럴: '',"",``
    - 숫자 리터럴: 123,12.345
    - 배열 리터럴: [~,~,~]
    - 객체 리터럴: {#:&,&:#,#,&}
* 객체 리터럴
  - old버전

```js
  //old버전의 객체리터럴 선언
 var sayNode = function(){ //함수선언(정의)
    //sayNode()함수 정의
     console.log('Node');
 };
 var es = 'ES객체속성추가';
 var oldObject = { //객체 리터럴 정의
    //키:값
     sayJS : function(){ //sayJS() 메소드 정의 
         console.log('JS');
     },
     sayNodeMethod: sayNode, //키:값
 };
 oldObject[es + 6] = 'Fantastic';
 oldObject.ES7='사랑해'; //es+7 은 성립X
 // 자바스크립트에서는 실행 중 객체에
 // 속성을 추가할 수 있다.
 // 속성명(키)를 동적으로 변경시켜가면서
 // 추가하려면 변수처리
 // 이때 사용하는 개념: 객체<==>연관배열
 // 연관배열: 배열의 index가 문자열인 배열
 
 oldObject.sayNodeMethod(); //Node
 oldObject.sayJS(); //JS
 console.log(oldObject.ES객체속성추가6); //Fantastic
 console.log(oldObject.ES7);
  ```
  - new 버전
```js
  var sayNode = function(){ //함수선언(정의)
        //sayNode()함수 정의
        console.log('Node');
     };
  var es = 'ES';
  const newObject = {
    sayJS(){ // 키:값---> function 키워드 없이 메소드 정의
        console.log('JS');
    },
    sayNode, // 키:값의 기호가 같으면 하나로 생략가능
    [es + 6]: 'Fantastic', //키에 변수 사용해서 속성정의 가능
    };
    newObject.sayNode(); // node
    newObject.sayJS(); // JS
    console.log(newObject.ES6);// Fantastic 
```

### 2.1.4 화살표 함수
* arrow function: (매개변수리스트)=>{소스코드들}
* 기존 함수정의방법의 함수와 화살표 함수에서 this 사용시 주의
  - 콜백함수를 기존 함수정의방법으로 정의하면 this는
        global객체로 바인딩(binding, 묶는다., 연결)
  - 콜백함수에서 화살표함수로 정의하면 this는
    콜백함수정의하는 곳의 상위 스코프의 객체로 바인딩

### 2.1.5 구조분해할당
* let 변수명 = 객체명.변수명; ===> let (변수명) = 객체명;
* 배열 구조분해 할당 가능

### 2.1.6 클래스
- ES6+에서 클래스 문법이 도입
- 실제 작동은 prototype 기반으로 함