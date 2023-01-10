// 인터페이스 선언
interface User {
  age: number;
  name: string;
}

// 변수에 인터페이스 활용
var seho: User = {
  age: 33,
  name: '세호'
};


// 함수에 인터페이스 활용 (함수 인자 정의)
function getUser(user: User) {
  console.log(user);
}

const capt = {
  name: '캡틴',
  age: 100
}

getUser(capt);




//함수 구조를 정의하는 인터페이스
interface SumFunction {
  (a: number, b: number): number;
}


let sum: SumFunction;
sum = function (a, b) {
  return a + b;
}




//인덱싱
// arr[index] ==> value
interface StringArray {
  [index: number]: string; //index는 number, [index] 즉 값(value)은 string이라는 뜻
}

var arrIndexing: StringArray = ['a', 'b', 'c'];
arrIndexing[0] = '10';




// 딕셔너리 패턴
// var objDict = {
//   sth: /abc/,  >> 이걸 딕셔너리 패턴으로 !
// }
interface StringRegexDictionary {
  [key: string]: RegExp  //sth가 key고 string임. 값은 정규식이므로 RegExp
}

var objDict: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

objDict['cssFile'] = / /;

Object.keys(objDict).forEach(function (value) {

})




// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}


interface Developer {
  name: string;
  age: number;
  language: string;
}


interface Developer extends Person{
  //아래 두줄은 extends 했기 때문에 필요없어짐 
  // name: string;
  // age: number;
  language: string;
}

//아래처럼 하면 에러 ! 왜냐하면 extends 하면서 name과 age도 필수로 써야하는것으로 선언되었기 때문~
var captEx: Developer = {
  language: "hi"
}

// 따라서 아래처럼 써야 정답!
var captExCorrect: Developer = {
  language: "hi",
  name: "캡틴",
  age: 100,
}