//JS 문자열 선언
let jsStr = "hello";


//TS 문자열 선언
let str: string = "hello";

// 숫자
let num: number = 10;

// 배열
let arr: Array<number> = [1,2,3];
let heroes: Array<any> = ["Capt", "Thor", "Hulk", 10];
let items: number[] = [1, 2, 3];

// 튜플 (모든 인덱스의 타입까지 지정하기)
let address: [string, number] = ["테스트", 10];

// 객체
let obj: object = {};
let person: object = {
    name: "capt",
    age: 100
};
//객체 안 타입 지정
let person2: {name: string, age: number} = {
    name: "capt",
    age: 100
}

// 진위값
let show: boolean = true;