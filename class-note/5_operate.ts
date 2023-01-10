//연산자

// value가 string일 수도 있고 number일 수도 있을때 any로 선언이 가능. 
// 하지만 typescript의 장점이 사라지는 것이니 지양하는게 좋음!
// function logMessage(value: any) {
//   console.log(value);
// }


// function logMessage(value: string | number) {
//   console.log(value);
// }




// union type
function logMessage1(value: string | number) {
	if (typeof value === "number") {
    //이러면 여기 안에서의 value는 자동으로 number라는 것을 알게됨.
    value.toLocaleString();
  }

  if (typeof value === "string") {
    //이러면 여기 안에서의 value는 자동으로 number라는 것을 알게됨.
    value.toString();
  }

  throw new TypeError('value must be string or number');
}


// any
function logMessage2(value: any) {
	if (typeof value === "number") {
    	// value가 number라는 것을 타입스크립트가 알지 못함
    }
}



interface Developer5 {
  name: string;
  skill: string;
}

interface Person5 {
  name: string;
  age: number;
}


function askSomeone(someone: Developer5 & Person5) {
  console.log(someone.name); 
  console.log(someone.skill);
  console.log(someone.age);
}

askSomeone({name: "디펠로버", skill: 'skill'})





















// function askSomeone(someone: Developer5 | Person5) {
//   console.log(someone.name); 
//   console.log(someone.skill);
//   console.log(someone.age);
// }

// askSomeone({name: "디펠로버", skill: 'skill', age: 20})