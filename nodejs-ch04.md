# 4. http모듈로 서버 작성
  * 쿠키,세션,요청주소별 라우팅 설정
  * 웹서버의 기본 동작
  * HTTP 프로토콜 이용방법
## 4.1 요청과 응답
  * Request
    - 클라이언트의 요청정보를 가지고 있는 객체
    - HTTP 요청 메시지
  * Response
     - 서버의 응답 정보를 가지고 있는 객체
     - HTTP 응답 메시지
  * HTTP메시지:요청,응답
    - 헤더(header)
    - 바디(body)
  * 서버를 구현
    - http 서버 객체를 이용

  * localhost
    - 자신의 컴퓨터의 도메인명
    - 자신의 컴퓨터 IP : 127.0.0.1
    - 외부에서는 접근 불가
  * port
    - 서비스 구분
  
  * 파일을 읽어서 응답하기
    - promise 형태로 읽어서 처리: async / await

  * HTTP Status Code(상태코드) : 응답코드
    - 브라우저가 서버로부터 전송된 상태코드를 보고 요청의 성공여부 판단
    - 2XX(200번대): 성공
      - 200 - 성공, 201- 작성됨.
    - 3XX: Redirection(방향전환, 다른페이지로 이동)
      - 301 - 영구이동, 302 - 임시이동
    - 4XX: 요청 자체 오류
      - 404 - FileNotFound(파일 찾을 수 없음)
      - 403 - Forbidden (금지됨)
      - 400 - 잘못요청됨
      - 401 - 권한없음
    - 5XX: 서버오류, 요청은 제대로, 서버측의 예측불가한 오류
      - 500 - 내부 서버 오류
      - 502 - 불량 게이트웨이
      - 503 - 서비스를 사용할 수 없음.

  * 요청은 성공이든 실패이든 반드시 응답해야 한다.
    - 응답이 일정시간 이상후에도 없으면 Timeout처리
## 4.2 REST
  * REST : Rpresental State Transfer : 대표적인 (기호,상징),상태 전달
    - 웹 서버에서의 자원(resource , 일반적인 파일, 서버가 할 수 있는 일)에 대해 정의하고 자원에 접근할 수 있는 주소에 대해 어떻게 나타낼 것인가 정의하는 방법.

      resource
      일반적인 파일: html, css, js, jpg등 이미지, mp3등, 음원, mp4 등 영상
      서버가 할 수 있는 일 : 더하기, 나누기 기능, 디비조회 기능
    - REST하게 만든 것: REST API
      - 만드는 방법
        - url : 명사로 지정
        - - users, baaaa
        - http request method(http요청메서드)
          - GET : 서버자원 읽기 - 쿼리 스트링
          - PUT : 서버에 새로운 자원 등록(Create)
          - Push: 서버 자원의 덮어쓰기
          - Patch_: 서버 자원의 일부분 수정(Update)
          - Delete : 서버 자원 삭제, 쿼리 스트링(Delete)
          - Options : 요청전 통신 옵션 설정
        - 표시 방법
          - GET / users, GET/boards
          - POST /users, PUT / users
          - PATCH /boards/223
          - DELETE /users /23445
          -장점
            - 요청 정보로 직관적으로 요청 내용확인 가능
            - 서비스 확장시  서버의 수정 없이 개발 가능
              - 개발시 백엔드, 프론트엔드 협력 용이
              - rest api정의, 상호 교환 정보형태 정의
              - 서버의 업데이트가 클라이언트에 영향을 거의 주지 않게
          - RESTful: REST API형태로 구현한것

* req : request 객체(readStream)
  - req.method
    - 요청 메소드 정보
  - req.url
    - url정보
  - req.session
  - req.headers.cookie
    - 쿠키값 정보

* res: response 객체(writeStream)
  - res.writeHead()
  - res.write()
  - res.end()

* JSON객체 ->문자열 : const JSON 객체명 = JSON.stringify(JSON객체명)
* 문자열 -> JSON객체 : const JSON 객체명 = JSON.parse(문자열명);

## 4.3 쿠키, 세션
* 요청하는 사람의 정보를 알고 싶어서 사용하는 정보
  - 로그인 처리

* cookie
  - 쿠키 작성: 서버
  - 쿠키 전송:
    - 브라우저가 서버로 최초 요청시 서버가 만들어서 응답과 함께 전송
    - 브라우저가 최초요청 이후 매번 서버로 
                브라우저가 쿠키정보를 요청과 함께 전송
    - 보안에 취약
  - 쿠키의 구성
    - 키1=값1;키2=값2;...
  - 쿠키에 저장할 수 없는 값: 한글,일본어---> encodeURIComponent()로 처리
  - 쿠키에는 ASCII코드만 저장가능: 특수문자 제외
  - 쿠키 작성 : 응답헤더
    - 서버가 함
    - res.writedHead(응답코드,{'Set-Cookie':'키1=값1;키2=값2;...'})
  - 쿠키 사용 : 요청헤더
    - req.headers.cookie

* session
  - 쿠키와 함께 사용되고, 세션의 정보는 서버에 저장관리
  - 세션의 정보를 단순히 서버에 저장하지 않음: Redis, Memcached 등과 같은 DB사용
  - 세션쿠키: 세션을 위해 사용되는 쿠키

## 4.4 https와 http2
* https
  - sequre, http+SSL
  - 요청과 응답 사이에 암호화 처리
  - require('https')
  - https.createServer(인증서관련옵션, 콜백);
* http2
  - https+http버전2 사용 
  - 헤더에 HTTP/2 정보가 있게됨
  - require('http2')
  - https.createSequreServer(인증서관련옵션, 콜백)

## 4.5 cluster
* 멀티프로세싱(fork : 명사는 포크이지만 동사는 나누어서 실행한다는 의미)
  - 비교: child_process 모듈
  - 서버 포트번호는 하나인데 여러개의 서버객체가 실행되어 분산처리
    - 성능 개선: 장점
  - 프로세스 단점과 동일한 단점: 상호 메모리 공유가 불가





  




















