/* 함수 선언식 */
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, 20));

// /* 익명함수 표현식 */
// const num = function (a, b) {
//   return a + b;
// };
// console.log(num(10, 20));

// /* 화살표 함수 */
// const num01 = (a, b) => {
//   return a + b;
// };
// console.log(num01(10, 20));

// /* 선언 즉시실행 */

// (function (a, b) {
//   let result = a + b;
//   console.log(`함수 실행결과값 : ${result}`);
// })(100, 200);

// const hi = () => "안녕하세요";

// call의 제어를 자유롭게 할 수 있는 함수와 제어를 받는 함수(*콜백함수)

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log("클릭");
//   return () => {
//     console.log("클릭클릭");
//     return () => {
//       console.log("클릭클릭클릭");
//       return () => {
//         console.log("이제그만");
//       };
//     };
//   };
// });

// const showData = (name, age) => {
//   alert(`안녕하세요! ${name}님! 나이가 ${age}살이시군요.`);
// };

// const getData = (callback) => {
//   const userName = prompt("이름을 입력하세요");
//   const userAge = prompt("나이를 입력하세요");
//   callback(userName, userAge);
// };

// getData(showData);
