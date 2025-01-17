// 변수 안에 담을 수 있는 값 => 자료형

// 원시타입 = Primitive type
// number
// string
// boolean
// truthy한 값

// > Template literal => 변수와 문자열을 동시에 사용하고자 할 때, 굳이 번거롭게 연산자를 사용하지 않을 수 있도록 만들어놓은 문법
// undefined(미정)
// > falsy한 값
// null(유효하지 않다 라는 값)
// > 아예 값을 주지 않은 것을 정의하고자 할 때
// symbol(유일무이한 값)

// 참조타입 = reference type
// array(배열)
// function(함수)
// object(객체)
// regexp (정규표현식)
// Map(맵데이터)
// Set(셋데이터)

const num = 7;
const str = "7";
const bool = true;
const bool02 = false;

// const age = prompt("당신의 나이를 입력하세요");
// console.log(age);
// console.log(typeof age);

console.log(typeof bool);
console.log(typeof bool02);

const userName = "현빈";
const movieTitle = "하얼빈";

// const result = userName + "배우가 출연한 최근 영화는 " + movieTitle + "입니다.";
const result = `${userName} 배우가 출연한 최근 영화는 ${movieTitle} 입니다.`;
console.log(result);

let hobby;
console.log(hobby);

let weekend = null;
console.log(weekend);

const only01 = Symbol();
const only02 = Symbol();

console.log(only01 === only02);

let id = Symbol();
const member365 = {
  name: "Jack",
  [id]: "ezen",
};

console.log(member365);

const arr = [1, 2, 3];
const atrArr = ["park", "kim", "lee"];
const boolArr = [true, false];

console.log(arr);
console.log(`${arr[2]}은 arr배열의 ${arr.length}번째 값입니다.`);
console.log(typeof arr);

// 자바스크립트의 중급자 실력을 갖추는 데 있어서 요구조건
// > iterable 객체 & 반복문을 누가 더 자유자재로 사용가능한가?

const obj = {
  firstNumber: 1,
  secondNumber: 2,
  thirdNumber: 3,
};

const frontendClass = {
  tutor: "David",
  student: 16,
  major: "language",
};
// 객체의 형태는 (key: value) => 한 쌍의 property = 속성
// html을 사용할 때 => a href => attribute
console.log(frontendClass);

// 온점표기법
console.log(frontendClass.tutor);
// 대괄호표기법
console.log(frontendClass["student"]);

frontendClass.attitude = "the best";
console.log(frontendClass);

// function = 기능
// 원래 초창기의 JS 함수 구현
// 선언 & 호출
function hello() {
  console.log("Hello World!");
}

console.log(typeof hello);
