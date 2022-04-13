const http = require('http');
const fs = require('fs').promises;

const users = {}; // 데이터 저장용

//매 요청마다 async(req,res)=>{}가 실행된다
// req: 요청정보(readStream으로 내부 구현)
// res: 응답정보(writeStream으로 내부 구현)

http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      if (req.url === '/') {
        const data = await fs.readFile('./restFront.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/about') {
        const data = await fs.readFile('./about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        return res.end(data);
      } else if (req.url === '/users') { //GET /users 요청에 대한 응답
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        return res.end(JSON.stringify(users));
      }
      // /도 /about도 /users도 아니면
      try {
        const data = await fs.readFile(`.${req.url}`);
        //예: GET /test.html
        return res.end(data);
      } catch (err) {
        // 주소에 해당하는 라우트를 못 찾았다는 404 Not Found error 발생
      }
    } else if (req.method === 'POST') { 
      if (req.url === '/user') { //POST /user
        let body = '';
        // 요청의 body를 stream 형식으로 받음
        req.on('data', (data) => {
          // req 스트림객체에 데이터가 전송되어 오면 data
          // 이벤트발생 --> 콜백실행됨
          body += data;
        });
        // 요청의 body를 다 받은 후 실행됨
        return req.on('end', () => {
          // req 스트림객체에서 데이터 전송 완료 되면 end 이벤트발생
          console.log('POST 본문(Body):', body);
          const { name } = JSON.parse(body);
          //구조분해할당응용
          const id = Date.now(); // 현재시각의 정보
          users[id] = name; //users={Date.now():name}
          // 연관배열(JSON객체) 처리
          res.writeHead(201, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('ok');
          // 201 - Created - 생성됨.
        });
      }
    } else if (req.method === 'PUT') {
      if (req.url.startsWith('/user/')) { // PUT /user/12131234131
        //req.url : /user/12131234131
        const key = req.url.split('/')[2];
        //['','user''12131234131]
        let body = '';
        req.on('data', (data) => {
          body += data;
        });
        //요청의 body(payload)를 다 받은 후 실행됨
        return req.on('end', () => {
          console.log('PUT 본문(Body):', body);
          users[key] = JSON.parse(body).name; // JSON객체 처리
          res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
          return res.end('ok');
        });
      }
    } else if (req.method === 'DELETE') {
      if (req.url.startsWith('/user/')) {
        const key = req.url.split('/')[2];
        delete users[key];
        res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('ok');
      }
    }
    res.writeHead(404);
    return res.end('NOT FOUND');
  } catch (err) {
    console.error(err);
    res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(err.message);
  }
})
  .listen(8082, () => {
    console.log('8082번 포트에서 서버 대기 중입니다');
  });