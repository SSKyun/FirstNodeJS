# 3. 노드 기능 알아보기
# 3.1 REPL 사용하기
  read - eval - print loop
* 실행 : cmd창에서 node+엔터로 입력
    * 프롬프트가 '>' 표시됨
    * js소스코드 입력
* 종료 : ctrl+c(2번) or .exit

## 3.2 JS 파일 실행
* 긴 소스코드는 REPL로 실행시키기 어려움
* 긴 소스코드는 js파일로 작성하고
  cmd창에서
  - node 실행시킬파일경로[.js] // []생략가능

## 3.3 모듈 작성
* 하나의 소스코드로 서비스 실행되는 경우는 거의 없음.
  - 관리를 위해 모듈 개념 사용
  - 모듈(module): 특정 기능을 수행하는 함수 
    또는 변수의 집합 --> 재사용가능--> 소스코드의 재사용성을 높임
* 모듈 정의
  - module.exports
* 모듈 사용
  - require(사용모듈경로)
* 모듈일지라도 확장자 js
  - ES6이후 모듈을 구분하기 위해 확장자 mjs
  - module.exports = 모듈로 사용할 객체
    --> export default 모듈로 사용할 객체;
  - const {변수명} require(사용모듈경로)
    --> import {변수명} from 사용모듈경로;
        React, Vue에서 주로 사용

## 노드의 내장객체
* 따로 설치하지 않고 사용가능

### 3.4.1 global
* 전역 객체,브라우저-window객체와 같은 역할
* window.setTimeout() ---> setTimeout() 사용가능
* global.setTimeout() ---> setTimeout() 사용가능
* global 키워드 생략가능
* [global.]console.log('')
* 모든 js에서 공유하는 객체
  - 공유 데이터 사용시키기 가능: 사용을 권장하지 않음.
* js에서는 실행중 객체에 동적으로 속성 추가 가능

### 3.4.2 console 객체
* [global.]console 객체
  - 주로 디버깅용: 변수값 확인, 에러내용 확인
  - 소스코드의 실행시간 조사
    - console.time(식별문자열) : 실행시간 조사 시작
    - console.timeEnd(식별문자열) : 실행시간 조사 종료 &
    실행시간 표시

### 3.4.3 타이머
* set+머시기() 함수: 반환값은 타이머 ID
  - setTimeout(콜백, 밀리초): 한번만 타이머 작동
  - setInterval(콜백, 밀리초): 밀리초단위로 여러번 작동
  - setImmediate(콜백): 즉시로 실행
    - setTimeout(콜백,0): 사용하는 걸 권장하지 않음
* clear+머시기(타이머ID): 해당 타이머의 실행 중지
  - clearTimeout(타이머ID)
  - clearInterval(타이머ID)
  - clearImeediate(타이머ID)

### 3.4.4 __filename,__dirname
* __filename: 현재 파일의 경로(파일명포함)
* __dirname: 현재 파일의 디렉토리 경로(파일명불포함)
  - 경로구분자
    - 윈도우: \
    - 맥, 리눅스 : /


### 3.4.5 module, exports, require
* 모듈 만들기
  - modul.exports에 모듈로 사용할 객체정의해서 대입
  - exports 객체로도 모듈 만들기 가능
    - 속성을만 모듈 정의하기 권장
  - module.exports === exports ==> true

@ 노드에서 this 사용 유의하기
- 최상위스코프(anonymous)에서 this: module.exports
  - 함수내의 코프 : global 객체
  - 화살표 함수내의 this: module.exports객체
- 참고: 동일한 소스코드의 브라우저에서 실행
  - 함수내의 this: window객체
  - 화살표함수 this객체
- 정리: 화살표함수내의 this는 화살표 함수를 감싸고 있는 스코프(context)의 this임.

* require(경로): 함수 호출, 반환 ---> 모듈 exports해 둔 객체
  - require.cache // 웹 만드는도중 웹캐시가 밀려서 오류발생가능.(운영할땐 상관x)
    - 로딩(loading) 모듈을 다시 로드하지 않고 캐쉬에 있는 정보를 이용
  - require.main
    - 현재 실행되고 있는 모듈

* require시 주의 사항: 순환참조 - 상호 require
  * 피해야 함.

### 3.4.6 process
* process, thread
* process객체
  - 현재 실행되고 있는 노드 프로세스 정보
  - node.exe가 메인메모리에 로드된 후의 정보
  (process.uptime()의 시간을 3600*24*30하면 한달이기때문에 한달에한번 서버 리프레쉬 가능하게 시간계산)

### 3.4.6.1 process.env
* 노드 프로세스가 실행되고 있는 환경의 정보
* 환경 시스템(OS)의 환경변수를 참조
* 환경정보의 수정, 추가, 삭제 가능
* env에 정보추가
  - 키=값
* 주요한 비밀 정보를 process,env에 저장하여 사용할 필요
  - db서버의 접속 Id, pw등
  - (github-.egnore은 업로드 되지 않아야하며 .egnore폴더나 파일은 업로드 안시키고 .env파일은 반드시 들어가야하는 파일 )

### 3.4.6.2 process.nextTick(콜백)
* task
  - setTimeout(콜백,0);
  - setImmediate(콜백);
* micro task: task보다 더 먼저 실행
  - process.nextTick(콜백);
  - Promise.resolve().then(콜백);

#### 3.4.6.3 process.exit(종료코드)
* 프로세스의 종료
  - 서버외의 노드 응용 프로그램에서 실행을 종료하려고 할때
  - 종료코드
    1: 비정상종료 - process.exit(1)
    0 또는 인수 없음: 정상종료, process.exit(0),
    process.exit()
  

