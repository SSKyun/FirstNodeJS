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
          - GET / users
          - POST /users, PUT / users
          - PATCH /boards/223
          - DELETE /users /23445
          -장점
            - 요청 정보로 직관적으로 요청 내용확인 가능
            - 서비스 확장시  서버의 수정 없이 개발 가능
              - 개발시 백엔드, 프론트엔드 협력 용이
              - rest api정의, 상호 교환 정보형태 정의
          - RESTful: REST API형태로 구현한것
