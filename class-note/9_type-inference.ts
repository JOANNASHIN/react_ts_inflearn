var a;
var a = 'abc';

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

//getB에 마우스 대보면 !!!
// 기본적으로 타입스크립트가 타입을 추론하고 있다는 것을 알 수 있음.


interface Dropdown<T> {
  value: T;
  title: string;
}