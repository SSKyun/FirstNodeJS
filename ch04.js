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

const http = require('http');
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
  });