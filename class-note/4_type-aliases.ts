interface PersonInterface {
  name: string;
  age: number;
}

let person1: PersonInterface;


type PersonType = {
  name: string;
  age: number;
}

let sehoStu: PersonType;

// var sehoT: PersonType = {
//   name: "세호",
//   age: 30
// }

var sehoI: PersonInterface = {
  name: "세호",
  age: 30
}

type MyString = string;
var str4: MyString = 'hello';


type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo) {

}

// 타입은 타입을 하나 생성하는 것이 아니라 나중에 쉽게 참고할 수 있게 이름을 부여하는 것과 같음!

// //인터페이스와 type의 차이점 
// 1. 타입은 확장이 되지 않음.
// 2. 마우스를 가져다대면 보이는게 다름

// 따라서 가능한 type보다는 interface를 사용할 것!