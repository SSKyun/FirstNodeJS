const { odd, even } = require('./var'); // 구조분해할당
//require(사용할모듈의경로) -- 확장자는 생략가능
// const odd = require('./var).odd;
// const even = require('./var).even;

function checkOddOrEven(num) {
  if (num % 2) { // 홀수면
    return odd;
  }
  return even;
}

module.exports = checkOddOrEven;