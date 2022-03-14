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
/* 
 //old버전의 객체리터럴 선언
 var sayNode = function(){ //함수선언(정의)
    //sayNode()함수 정의
     console.log('Node');
 };
 var es = 'ES객체속성추가';
 var oldObject = { //객체 리터럴 정의
    //키:값
     sayJS : function(){ //sayJS() 메소드 정의 
         console.log('JS');
     },
     sayNodeMethod: sayNode, //키:값
 };
 oldObject[es + 6] = 'Fantastic';
 oldObject.ES7='사랑해'; //es+7 은 성립X
 // 자바스크립트에서는 실행 중 객체에
 // 속성을 추가할 수 있다.
 // 속성명(키)를 동적으로 변경시켜가면서
 // 추가하려면 변수처리
 // 이때 사용하는 개념: 객체<==>연관배열
 // 연관배열: 배열의 index가 문자열인 배열
 
 oldObject.sayNodeMethod(); //Node
 oldObject.sayJS(); //JS
 console.log(oldObject.ES객체속성추가6); //Fantastic
 console.log(oldObject.ES7); */
 
/*  //new 버전의 객체리터럴
 var sayNode = function(){ //함수선언(정의)
    //sayNode()함수 정의
     console.log('Node');
 };
 var es = 'ES';
 const newObject = {
     sayJS(){ // 키:값---> function 키워드 없이 메소드 정의
         console.log('JS');
     },
     sayNode, // 키:값의 기호가 같으면 하나로 생략가능
     [es + 6]: 'Fantastic', //키에 변수 사용해서 속성정의 가능
    };
    newObject.sayNode(); // node
    newObject.sayJS(); // JS
    console.log(newObject.ES6);// Fantastic  */
    
/* //기존함수 정의1, 호출 add1(1,2);
function add1(x,y){
    return x+y;
}
//기존함수 정의2, 호출 add2(1,2);
const add2 = function(x,y){ // 무명의 함수(anonymous function)
    return x+y;
}

// 화살표 함수 1, 호출 add3(1,2)
const add3 = (x,y) => {
    return x+y;
};

//화살표 함수 2 : 호출 add4(1,2)
//간편 표시 {~~~}에서 ~~~가 return문 하나인 경우 간략표기
const add4 = (x,y)=>(x+y); //뒤쪽 괄호도 생략가능
console.log(add1(1,2));
console.log(add2(1,2));
console.log(add3(1,2));
console.log(add4(1,2));

//매개변수가 하나일 경우
const test = (x)=>(x+7); 
===> const test2 = x=>x+7; //괄호 전부생략가능
 */

/* var relationship1 ={
    name : 'zero',
    friends: ['nero','hero','xero'],
    logFriends: function(){ //기존방식의 정의: 2번방법
        console.log('this1',this);// this는 relationship1의 객체
        var that = this; //relationship1을 가르키는 this를 that에 저장
        this.friends.forEach(function (friend,index){ // 콜백함수
            console.log('this2',this);
            //this가 global객체가 된다.
            console.log(that.name,index+'번째친구:', friend);
        });
    },
};
relationship1.logFriends();
const relationship2 ={
    name: 'zero',
    friends:['nero','hero','xero'],
    logFriends(){
        console.log('this3',this);
        //this: relationship2의 객체
        this.friends.forEach((friends,index)=>{
            console.log('this4',this);
            console.log(this.name,friends);
        });
    },
};
relationship2.logFriends(); */

/* var candyMachine = {
    status:{ //키:값(객체로 설정 가능)
        name:'node',
        count:5,
    },
    getCandy: function(){ // === getCandy(){}
        console.log(this); //this가 global
        this.status.count--;
        return this.status.count;
    },
};
//old
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;
// new
// const {getCandy, status:{count}} = candyMachine;

console.log(getCandy()); */
/* 
//배열 구조분해 할당
var array = ['nodejs', {}, 10, true];
// old
var node = array[0];
var obj = array[1];
var bool = array[3];
//new
const {node,obj, ,bool} = array; */


//old 버전: 클래스 정의 및 상속
/* var Human = function(type) { // 생성자 함수
    // JS에서는 함수를 객체로 취급
    this.type = type || 'human';
  };
  
  Human.isHuman = function(human) {
    return human instanceof Human;
  }
  
  Human.prototype.breathe = function() {
    alert('h-a-a-a-m');
  };
  
  var Zero = function(type, firstName, lastName) {
    Human.apply(this, arguments); //상속 시킴1
    this.firstName = firstName;
    this.lastName = lastName;
  };
  
  Zero.prototype = Object.create(Human.prototype);
  Zero.prototype.constructor = Zero; // 상속하는 부분2
  Zero.prototype.sayName = function() {
    alert(this.firstName + ' ' + this.lastName);
  };
  var oldZero = new Zero('human', 'Zero', 'Cho');
  Human.isHuman(oldZero); // true */

/*   class Human {
    constructor(type = 'human') {
      // 호출시 매개변수 생략하면 디폴트값대입
      this.type = type;
    }
  
    static isHuman(human) {
      return human instanceof Human;
    }
  
    breathe() {
      alert('h-a-a-a-m');
    }
  }
  
  class Zero extends Human {
    constructor(type, firstName, lastName) {
      super(type);
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    sayName() {
      super.breathe();
      alert(`${this.firstName} ${this.lastName}`);
    }
  }
  
  const newZero = new Zero('human', 'Zero', 'Cho');
  Human.isHuman(newZero); // true */

/* 
  const promise3 = Promise.reject('실패');
  const promise1 = Promise.resolve('성공1');
  const promise2 = Promise.resolve('성공2');
  //const promise2 = Promise.reject('성공2');

  Promise.all([promise1,promise2]) // Promise.race() 참고!
  .then((result_msg)=>{
    console.log(result_msg);//['성공','성공2']
  })
  .catch((err)=>{
    console.log(err);
  }); */