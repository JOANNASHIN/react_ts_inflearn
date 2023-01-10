[일반 js]
function logText(text) {
  console.log(text)
  return text;
}

logText(10);
logText("하이");
logText(true);





[가볍게 훑어보는 제네릭]
function logText<T>(text:T):T {
  console.log(text);
  return text;
}

logText("하이") //넘겨줄 때 text의 타입이 정해짐!!!!
//호출하는 시점에 string이든 number든 타입을 넘겨줄 수 있는 것이 제네릭!
logText<string>("하이"); //좀 더 정확하게 적으려면 이렇게 적을 수 있음. 넘길 인자값은 string이다. 이런뜻







[제네릭 문법을 쓰는 이유 - union으로도 불가]

//만약 숫자랑 문자이냐에 따라서 다른 행동을 하고 싶다고 했을때 이를 위해 함수를 2개 만드는것은 좋지않은 코드가 됨!!!
function textLog(text: string) {
  console.log(text)
  text.split(""); //예시
  return text;
}

function numberLog(num: number) {
  console.log(num)
  num = num + 1;
  return num;
}


// 위를 해결하기 위해서 union type을 사용하여 해결은 가능. 하지만 문제는 받는 곳에서 발생.
function LogUnion(text: string | number) {
  console.log(text)
  return text;
}

const returnLog = LogUnion("a,b,c");
returnLog.split(",")   //여기서 문제 발생!! returnLog의 타입이 number또는 string이기 때문


[제네릭 사용 - 간단예시]
// interface Dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: Dropdown = { value: "abc", selected: false };

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = { value: "abc", selected: false };
const obj2: Dropdown<number> = { value: "abc", selected: false }; //오류




[제네릭의 장점 1]

// logText<T> //여기서의 T는 받은 타입
// (text:T) //받은 인자도 이 타입으로 쓰겠다
// :T //return 되는 값도 이 타입으로 쓰겠다
// 호출하는 시점에서 정해지기 때문에 어떤 타입이든 활용 가능.
function logText<T>(text:T):T {
  console.log(text);
  return text;
}


//호출할때 string으로 정의
const str = logText<string>("abc");
str.split("");

//호출할 때 boolean 으로 정의
const isLogin = logText<boolean>(true);
if (isLogin) {}
else {}



[제네릭의 장점 2]
dropdown-generic.ts 보기










[제네릭의 타입 제한 - 뒤에 [] ]

function logTextLength<T>(text: T): T {
  console.log(text.length) //이건 오류! 왜냐면 어떤 타입이 들어올지 모른다고 생각하기 때문
  return text; 
}

logTextLength<string>("zz")



function logTextLength2<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text)
  })
  return text; 
}

logTextLength2<string>(["zz","test"])


[제네릭의 타입 제한2 - extends]

interface LengthType {
  length: number;
}

function logTextLength3<T extends LengthType>(text: T): T { //extends를 통해서 length는 number라는 것을 정의.
  console.log(text.length)
  return text; 
}

logTextLength3("a"); 
logTextLength3(10); //10.length는 없기 때문에 오류
logTextLength3({ length: 10 });  //이것도 정상
logTextLength3({ len: 10 });  //이건오류



[제네릭의 타입 제한3 - keyof]

interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem 있는 key 중에 한가지가 바로 제네릭이다. 타입이다. 라는 뜻
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption:T):T {
  console.log(itemOption.stock.toString)
  return itemOption;
}

// getShoppingItemOption(10)
// getShoppingItemOption<string>("a")
getShoppingItemOption('name')
getShoppingItemOption({stock: 10000});

//ctrl + space

