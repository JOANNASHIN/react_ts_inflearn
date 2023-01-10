//숫자
enum Shoesnum {
  Nike,
  Adidas
}

var myShoes1 = Shoesnum.Nike;
console.log(myShoes1); // 0




enum Shoesnum2 {
  Nike = 5,
  Adidas
}

var myShoes2 = Shoesnum2.Nike;
var myShoes3 = Shoesnum2.Adidas;
console.log(myShoes2, myShoes3); // 5, 6




//스트링
enum ShoesString {
  Nike = "나이키",
  Adidas = "아디다스"
}

var myShoesString1 = ShoesString.Nike;
var myShoesString2 = ShoesString.Adidas;
console.log(myShoesString1, myShoesString2); // '나이키', '아디다스'


// 문자형일때는 둘다 안써주면 에러 남.







enum ShoesString2 {
  Nike = "나이키",
  Adidas
}





//이렇게 했을때는 어떤 값이든 다 넘길 수 있음 케이스가 명확하지 않음.
// function askEnum(answer: string) {
//   if (answer === 'yes') {
//     console.log("정답입니다.")
//   }
//   if (answer === 'no') {
//     console.log("오답입니다.")
//   }
// }

// askEnum("yes");
// askEnum("no");
// askEnum("y");
// askEnum("예");
//이렇게 하면 Answer안에 있는 것들만 가능! 정확한 코드와 예외케이스가 줄어듬.






enum Answer {
  Yes = 'Y',
  No = 'N',
}

function askEnum(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다.")
  }
  if (answer === Answer.No) {
    console.log("오답입니다.")
  }
}

askEnum(Answer.Yes);
askEnum(Answer.No);
askEnum("y");
askEnum("Y");
askEnum("yes");
askEnum("YES");
