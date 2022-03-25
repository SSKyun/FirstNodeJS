/* const helloWorld = ()=>{
    console.log('안녕 영진인');
    helloNode();
};

const helloNode= ()=>{
    console.log('안녕 노드');
};

helloWorld(); */

/* const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello')); */

/* const string = 'abc';
const number = 1;
const boolean = true;
const obj = {
  outside: {
    inside: {
      key: 'value',
    },
  },
};
console.time('전체시간');
console.log('평범한 로그입니다 쉼표로 구분해 여러 값을 찍을 수 있습니다');
console.log(string, number, boolean);
console.error('에러 메시지는 console.error에 담아주세요');

console.table([{ name: '제로', birth: 1994 }, { name: 'hero', birth: 1988}]);

console.dir(obj, { colors: false, depth: 2 });
console.dir(obj, { colors: true, depth: 1 });

console.time('시간측정');
for (let i = 0; i < 100000; i++) {}
console.timeEnd('시간측정');

function b() {
  console.trace('에러 위치 추적');
}
function a() {
  b();
}
a();

console.timeEnd('전체시간');

 */
/* 
const timeout = setTimeout(() => {
  console.log('1.5초 후 실행');
}, 1500);

const interval = setInterval(() => {
  console.log('1초마다 실행');
}, 1000);

const timeout2 = setTimeout(() => {
  console.log('실행되지 않습니다');
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2);
  clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
  console.log('즉시 실행');
});

const immediate2 = setImmediate(() => {
  console.log('실행되지 않습니다');
});

clearImmediate(immediate2);
 */
/* console.log(__filename);
console.log(__dirname);

setImmediate(() => {
  console.log('immediate'); //4
});
process.nextTick(() => {
  console.log('nextTick'); //1
});
setTimeout(() => {
  console.log('timeout'); //3
}, 0);
Promise.resolve().then(() => console.log('promise')); //2 */
/* 
const os = require('os');

console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch()); // cqu종류
console.log('os.platform():', os.platform()); // os종류
console.log('os.type():', os.type()); // os type
console.log('os.uptime():', os.uptime()); // os 시작후 경과시간
console.log('os.hostname():', os.hostname()); // 컴퓨터이름
console.log('os.release():', os.release()); // os version

console.log('경로------------------------------------------');
console.log('os.homedir():', os.homedir()); // Home Directory
console.log('os.tmpdir():', os.tmpdir()); // 임시저장파일 경로

console.log('cpu 정보--------------------------------------');
console.log('os.cpus():', os.cpus()); // cpu core정보
console.log('os.cpus().length:', os.cpus().length); // core 갯수

console.log('메모리 정보-----------------------------------');
console.log('os.freemem():', os.freemem()); // 사용가능 메모리 용량
console.log('os.totalmem():', os.totalmem()); // 전체 메모리 용량 */

/* const path = require('path');

const string = __filename; // 현재파일의경로 포함 파일명 (문자열)

console.log('path.sep:', path.sep); // 경로구분자
console.log('path.delimiter:', path.delimiter); // 환경변수의 구분자
// window - ;, posixr - :
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
// __dirname
console.log('path.extname():', path.extname(string));
// ext --> extention (확장자)
console.log('path.basename():', path.basename(string));
// 파일의 이름(경로 포함하지 않은, 확장자 포함)
console.log('path.basename - extname:', 
    path.basename(string, path.extname(string)));
// 파일의 이름
console.log('------------------------------');
console.log('path.parse()', path.parse(string));
// parse(문자열): 반환값 - 객체

console.log('path.format():', path.format({
  dir: 'C:\\users\\zerocho',
  name: 'path',
  ext: '.js',
}));
// format(객체): 반환값-문자열
console.log('path.normalize():', path.normalize('C://users\\\\zerocho\\\path.js'));
// normalize(): 오류가 있는 경로를 정상적으로 변경해서 반환
console.log('------------------------------');
console.log('path.isAbsolute(C:\\):', path.isAbsolute('C:\\'));
// 경로가 절대경로라면 true
// windows - C: 등으로 시작
// POSIX - / 으로 시작
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
// 상대경로 false
// windows, POSIX : . | .. 으로 시작, 
console.log('------------------------------');
console.log('path.relative():', path.relative('C:\\users\\zerocho\\path.js', 'C:\\'));
// relative(기준경로, 비교경로); 기준경로로 이동하기 위한 상대경로를 반환
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
// 파라미터를 하나의 경로로 합쳐서 반환
// / 정보가 있다면 상대 경로로 처리
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));
// 파라미터를 하나의 경로로 합쳐서 반환
// / 정보가 있다면 절대 경로로 처리 */

/* const url = require('url');

const { URL } = url; //구조분해할당
const myURL = new URL('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
// URL클래스의 객체 생성 - WHATWG방식
console.log('new URL():', myURL);
console.log('url.format():', url.format(myURL)); //취소선 old하다
// format(객체): 반환-문자열
console.log('------------------------------');
const parsedUrl = url.parse('http://www.gilbut.co.kr/book/bookList.aspx?sercate1=001001000#anchor');
// parse(문자열): 반환- 객체(old style)
console.log('url.parse():', parsedUrl);
console.log('url.format():', url.format(parsedUrl)); */

/* const { URL } = require('url');
// searchParams에 대한 참고: p83 - FormData
const myURL = new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('limit'));
console.log('searchParams.has():', myURL.searchParams.has('page'));

console.log('searchParams.keys():', myURL.searchParams.keys());
console.log('searchParams.values():', myURL.searchParams.values());
// search정보에서 key=value형태값들에 대해 키-keys(), 값-values
myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));

myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));

console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString(); */

/* const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
// old style url객체
const query = querystring.parse(parsedUrl.query);
//parsedUrl.query === 'page=3&limit=10&category=nodejs&category=javscript
// query: 객체
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));
// stringify() : format()과 유사, 문자열로 반환
 */
/* const crypto = require('crypto');
// 메소드 체이닝
console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
// 해시 체이닝
// md5 : 128bits : 취약점 발견
//sha1 - 160bits : 취약점 발견
//sha256 - 256bits - 32bytes : 위험
//sha512 - 512bits - 64bytes : 사용중,경고

// update(암호화하려는평문)
// digest(인코딩코드) :base64 encoding 많이사용 : 제일 짧아서
// 인코딩코드 : base64, hex, latin1 등
console.log('hex:', crypto.createHash('sha512').update('비밀번호').digest('hex'));
console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));
 */

/* const crypto = require('crypto');

crypto.randomBytes(
  64, // 바이트 길이  : 512bytes
  (err, buf) => { // buf에 생성된 데이터 입력, buffer
  const salt = buf.toString('base64');
  console.log('salt:', salt);
  crypto.pbkdf2(
  '비밀번호', // 암호화할 평문
   salt, // 소금: 음식의 소금철엄 평문에 추가
   100000, // 반복횟수
   64, // key길이
   'sha512', // 암호 해시함수알고리즘
   (err, key) => { // key-암호문
    console.log('password:', key.toString('base64'));
  });
}); */

/* const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456'; // 32 byte 고정
const iv = '1234567890123456'; // 16 byte 고정

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf8');
result2 += decipher.final('utf8');
console.log('복호화:', result2); */

const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate(
  (x, y) => { //deprecated시킬 함수
  console.log(x + y);
  }, 
  'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!' 
  // deprecated되는 함수의 호출시 출력될 내용
);
/* const dontUseMe(x, y) => { // 원래 deprecated 되기전
  console.log(x + y);
},  */
dontUseMe(1, 2);
// ~ify : ~만든다
const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
  })
  .catch((error) => {
    console.error(error);
  });