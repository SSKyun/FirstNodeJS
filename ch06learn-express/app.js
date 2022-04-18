const express = require('express'); //express모듈 임포트
const path = require('path');

const app = express(); //웹서버 객체를 생성
app.set('port', process.env.PORT || 3000);
// 디폴트 3000, process.env.PORT가 ''이 아니면 
//process.env.PORT 값으로 설정

//미들웨어 구현
app.use((req,res,next)=>{
  console.log("모든 요청에 대해 처리하는 미들웨어작성");
  next();
});

app.get(
  '/',
  (req,res,next)=>{
    console.log("GET / 요청시에만 실행되는 미들웨어");
    next();
 },
 (req,res)=>{
    throw new Error("에러 발생")
   }
 );
app.use(( err,req,res,next)=>{자
  if(err){console.log(object);
  res.status(500).send(err,message);
 }
}
);

app.get('/', (req, res) => {
  /* res.send('Hello, Express');
  res.sendFile(path.join(__dirname, '/index.html')); */
  res.sendFile(path.join(__dirname,'/index.html'));
});

app.listen(app.get('port'), () => {
console.log(app.get('port'), '번 포트에서 대기 중');//port = 3000
});