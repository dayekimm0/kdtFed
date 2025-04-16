//함수선언식
// function code() {
//   console.log("오늘은 목요일입니다!");
// }
// code();

// const obj = {
//   title: "자바스크립트",
//   fnc: function () {
//     console.log("자바스크립트 짱!");
//   },
// };
// obj.fnc();
// 객체 안에 할당되어진 함수 : 메서드(방법)

// function calcSum() {
//   for (let i = 1; i <= 10; i++) {
//     calcSum = i + (i + 1);
//   }
//   console.log(calcSum);
// }

function calcSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
var num = 5;

console.log(`1부터 ${num}까지 더하면 ${calcSum(num)}입니다.`);

// 매개변수는 함수의 선언부에서 필요
// function sum(a, b) {
//   const result = a + b;
//   console.log(result);
// }
// sum(10, 20);

// "반환" => return문

// function multiple(a, b, c = 10) {
//   return a + b + c;
// }
// console.log(multiple(2, 4));

/* 전역스코프 사용사례 1번
var hi = "hello";

function greeting() {
  console.log(hi);
}
greeting();
*/
/* 2번 */
// var hi = "hello";
// function greeting() {
//   hi = "bye";
// }
// greeting();
/* 3번 */
// function greeting() {
//   hi = "hello";
// }
// greeting();
// console.log(hi);

/* 블록스코프 */
// const factor = 5;

// function calc() {
//   return num * factor;
// }

// {
//   const num = 10;
//   let result = calc();
//   console.log(`result : ${result}`);
// }
