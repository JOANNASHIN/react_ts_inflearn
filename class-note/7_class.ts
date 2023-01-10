//[js의 class]

class classTest {
  constructor() {
    console.log('생성 되었습니다.')
  }
}

new classTest(); //생성 되었습니다.



class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var seho = new Person("세호", 30); //생성 되었습니다.
console.log(seho)


/*
Person: {
  "name": "세호",
  "age": 30
} 
*/






//[js의 prototype]


var user = {
  name: "캡틴",
  age: 100
};

var admin = {
  name: "캡틴",
  age: 100,
  role: "어드민!"
};





// 이라고 했을때 user 내용을 좀 살려서 admin의 내용을 간략하게 만들 수 있음.


var user = {
  name: "캡틴",
  age: 100
};

var admin = {};
admin.__proto__ = user; //프로토타입 user안의 내용 반영

admin.role = "어드민" //따로 추가


//그리고 나서
admin.name //캡틴
admin.age // 100





  /**
   * 상단에 타입 지정을 해줘야함
   * 
   * 앞에 지정을 해 줄수도 있음.
   * private 이 안에서만 쓰겠다는 뜻 (private name:string)
   * public
    readonly log:string;
   * readonly  >> 
   */


class PersonTs {
  name: string;
  age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}