/* const http = require('http');

http.createServer(
    (req,res)=>{// req: request객체, res: response객체
    //if(req.url == '/users')
    res.writeHead(200,{'Content-type':'test/html;charset=utf8'})
    res.write('<h1>안녕 일본반 여러분</h1>');//클라이언트 전송, 응답 바디
    res.write('<h2>안녕 일본반 여러분</h2>');
    res.write('<span style="background-color:orange,color=black">HI Japan</span>')
    res.end('<div>완료</div>'); // http 응답을 클라이언트로 전송
    }
)//http.Server 객체 생성
.listen( //서버 실행 대기
'8080', //포트번호
()=>{ //서버실행이 성공되면 호출
    console.log('8080포트에서 서버 실행하여 요청 대기중');
    console.log('http://localhost:8080/으로 요청 시도하세요.');

}
); */

/* const http = require('http');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
  try {
    const data = await fs.readFile('./ch04-server2.html');
    // 버퍼
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(data);
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})
  .listen(8081, () => {
    console.log('8081번 포트에서 서버 대기 중입니다!');
  }); */
/* 
  const http = require('http');
  http.createServer(
    (req,res) =>{
      console.log(req.url,req.headers.cookie);
      res.writeHead(
        200,
        {'Set-Cookie':`mycookie=test;testcookie=testvalue;ttt=${encodeURIComponent('김영진`)}`}
      , res.end('쿠키사용예제')
      }
    )
    .listen(
    8083,
    ()=>{
      console.log('8083서버가 열렸습니다.');
    }
  ); */
/* 
const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie  //메서드 체인
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);// old style 
    const { name } = qs.parse(query);
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 5);
    res.writeHead(302, {  //임시이동, 리다이렉션
      Location: '/',  // 이동 위치를 지정
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  // name이라는 쿠키가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${cookies.name}님 안녕하세요`);  
  } else {  //GET / 요청 처리
    try {
      const data = await fs.readFile('./ch04-cookie2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  }); */

const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const session = {}; // 추가

const parseCookies = (cookie = '') =>
  cookie // 메서드 체인
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const { query } = url.parse(req.url);
    const { name } = qs.parse(query);
    const expires = new Date();
    // 쿠키 유효 시간을 현재시간 + 5분으로 설정
    expires.setMinutes(expires.getMinutes() + 1);

    // 세션정보 작성 // 추가
    const uniqueInt = Date.now();//1970년 1월1일부터 지금까지 경과한 초.
    // 현재시각으로 유니크한 정수값 생성
    
    session[uniqueInt] = { // 추가 (세션데이타)
      name,
      expires,
    };

    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    }); // 세션쿠키 설정 // 추가
    res.end();
  // name이라는 쿠키가 있는 경우 // 쿠키세션과 session[]은 다르다
  } else if (cookies.session && session[cookies.session].expires>new Date()) { //추가 
    console.log(session);
    res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(`${session[cookies.session].name}님 안녕하세요`); //추가 
  } else {
    try {
      const data = await fs.readFile('./cookie2.html');
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8085, () => { // 수정
    console.log('8085번 포트에서 서버 대기 중입니다!');
  });