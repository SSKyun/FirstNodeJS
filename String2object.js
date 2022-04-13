const testcookie =`d``name=${encodeURIComponant('김영진')};mytest=1234:,janpanit=ban
const parseCookies = (cookie = '') =>
    console.log(cookie);// cookie  //메서드 체인
    return cookie           
    .split(';')
  .map(v => v.split('='))
  .reduce((acc, [k, v]) => {
    acc[k.trim()] = decodeURIComponent(v); 
    return acc;
  }, {});
  console.log(parseCookies(testcookie) );`
  //요청을 하면 서버가 쿠키값을 만들어서 요청할따마다 사용