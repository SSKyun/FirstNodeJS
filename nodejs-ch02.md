# 2. 노드를 위해 알아야 할 자바스크립트 문법

https://joshua1988.github.io/web-development/javascript/promise-for-beginners/

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
- 실제 작동은 prototype 기반으로 함.

### 2.1.7 Promise(프로미스, 약속)
- 실행을 완료할 것을 약속
- 콜백함수, 비동기 동작
- 기존에 콜백함수내에서 콜백함수를 호출하는 것을 반복한 경우
  콜백지옥(callback hell) 발생-->해결하기위해 제안된 객체
- ES6+ 도입된 객체
- 비동기 처리를 성공, 실패로 분리해서 메서드 정의 가능한 특징.

* 사용 규칙
  - 1. 프로미스 객체 생성
    - 생성자의 파라미터 : 콜백함수
      - 콜백함수의 파라미터 : resolve(성공), reject(실패)
    - 콜백함수를 정의하는 것에 따라 프로미스 동작이 결정
  - 2. 생성된 객체에 then(),catch(),finally()메서드 호출
    - 파라미터: 콜백함수
    - resolve()호출되면 then(콜백)의 콜백 실행
    - reject()호출되면 catch(콜백)의 콜백 실행
    - finally(콜백): resolve()가 호출되거나 reject()가 호출되면(모든경우)
      - 콜백의 파라미터: resolve(), reject()의 인자값을 받아내는 
      매개변수

* 여러개의 비동기 동작이 순서를 지켜서 실행되어야 하는 경우 : 콜백지옥
  - 연속적으로 프로미스 사용 : 프로미스 체이닝
  - 첫번째 then(콜백)의 콜백내에서 프로미스객체 생성해서 반환
  - 두번째 then(콜백)의 콜백내에서 프로미스객체 생성해서 반환
  - 세번째 then(콜백)의 콜백내에서 프로미스객체 생성해서 반환
  - 네번째 then(콜백)...

* 여러개의 비동기 동작이 모두 실행되어야 하는 경우:
  - Promise.all(프로미스 객체들의 배열)
  - 배열에 있는 모든 프로미스가 성공해야 성공한 것으로 동작

### 2.1.8 async/await
* 노드 7.6 버전이후, .ES2017이후
* 가독성을 높임
* 동작은 비동기 동작하는데 코딩은 동기적으로 작성할 수 있음
* 적용하는 조건
  - 1. 함수가 반드시 async함수여야 한다.
    - async함수는 return하지 않아도 무조건 프로미스객체를 반환한다.
    - async함수에 대해 then(),catch()처리 가능함
  - 2. 비동기 코드에는 await을 함께 표기
```js
function findAndSaveUser(Users) {
  Users.findOne({})
    .then((user) => {
      user.name = 'zero';
      return user.save();
    })
    .then((user) => {
      return Users.findOne({ gender: 'm' });
    })
    .then((user) => {
      // 생략
    })
    .catch(err => {
      console.error(err);
    });
}
```

```js
// 1. async 함수 만들기
async function findAndSaveUser(Users) {
//const findAndSaveUser = async function(User){
//cibst findAndSaveUser = async (User) => {}
}
// 2. 비동기 코드에 await  

// 3. error처리를 위해서는 try catch
try{
  let user = await Users.findOne({});
  user.name = 'zero';
  user = await user.save();
  user = await User.findOne({gender:'m'});
  }catch(err){
  console.error(err);
  }
}
```

## 2.2 Front-end JS
* 거의 대부분 브라우저에서 사용하는 코드
* HTML의 script태그 내의 코드
* html처리 객체
  - DOM: document객체와 관련( 객체와 )
  - BOM: window 객체와 관련(document,history,href,navigator,geolocation,...)

### 2.2.1 AJAX Asynchronous Javascript and XML
* Web 2.0의 시작, Mashup(매시업) -OpenAPI
* 웹페이지의 이동없이 서버의 욫ㅇ에 대한 응답을 받아 처리할 수 있는 기술
* XML--> 750N
* XMLHttpRequest 객체사용하여 통신
  - 관련 대체 라이브러리 많음
  - jQuery.ajax(), axios, fetch
  - fetch vs axios
    - fetch: JS표준 라이브러라
    - axios: 따로 설치해야 하는 라이브러리,, 편리성 높음
* axios사용
  - 설치 사용
    - npm install axois
  - CDN사용
    - <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
    - <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

### 2.2.2 FormData
* html의 form 태그 정보를 다루기 쉽게 해주는 객체
  - 동적으로 form 태그의 정보를 제어할 수 있음.
  - has(),append(),get(),getAll(),set(),delete()

### 2.2.3 encodeURIComponent, decodeURIComponent
* 웹브라우저의 주소에 대한 한글처리
  - https://www.zerocho.com/api/search/노드
  - https://www.zerocho.com/api/search/%EB%85%B8%EB%93%9C
  - 보내는쪽: 한글 주소 부분을 encodeURIComponent(한글문자열) 처리
  - 받는쪽: 한글 주소 부분을 decodeURIComponent(받은문자열) 처리
  - encodeURIComponent('노드') : %EB%85%B8%EB%93%9C
  - decodeURIComponent('%EB%85%B8%EB%93%9C') : 노드

### 2.2.4 데이터 속성과 dataset
* html태그에 사용자 정의 데이터를 포함시키기 위해 사용
  - 태그에 사용자 정의 데이터 포함시키기
  - html 태그내에 data-사용자정의데이터변깂
    - data-변수부분1-변수부분2 --> snake-case
  - html의 JS에서 상기 데이터 처리를 위해 dataset으로접근 사용가능
    - 변수부분1변수부분2(변수부분2의 첫글자 대문자): CamelCase

 =     
