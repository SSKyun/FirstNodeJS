/* if(true){
    var x = 3;
}
console.log(x); //anonymous 함수내

if(true){
    const y = 3;
    let z = 3;
}
//console.log(y); // if블록내에 외부에서 사용시도--Error
console.log(z); // if블록내에 외부에서 사용시도--Error
 */ //alt + shift + a == 전체 주석

 const a = 0;
// a = 1; //재할당 불가 : error

 let b = 0;
 b = 1; //재할당 가능

 //const c; //선언시 최초할당 필수(선언과 초기화 함께해야함.) error

 const num3 = 1;
 const num4 = 2;
 const res = 3;

 console.log(`${num3} 더하기 ${num4}는 '${res}' 입니다.`);