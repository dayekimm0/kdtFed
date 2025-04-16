/*
const fruits = ["apple", "banana", "grape"];

console.log(fruits);

//전개연산자 구문
// spread operator
// console.log(...fruits);
*/

// const addNum = (...numbers) => {
//   let sum = 0;
//   /*
//   numbers.forEach((number) => {
//     sum += number;
//   });
//   */

//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// };
// console.log(addNum(1, 3, 5, 7));

const displayFavorites = (first, ...fruits) => {
  const str = `내가 가장 좋아하는 과일은 ${first}입니다.`;
  return str;
};
console.log(displayFavorites("사과", "포도", "토마토"));
