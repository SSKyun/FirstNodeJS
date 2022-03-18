/* const helloWorld = ()=>{
    console.log('안녕 영진인');
    helloNode();
};

const helloNode= ()=>{
    console.log('안녕 노드');
};

helloWorld(); */
const { odd, even } = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str) {
  if (str.length % 2) { // 홀수면
    return odd;
  }
  return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));