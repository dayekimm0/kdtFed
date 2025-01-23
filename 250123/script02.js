/*
const fruits = ["apple", "banana", "grape"];

console.log(fruits);

//전개연산자 구문
// spread operator
// console.log(...fruits);
*/

const addNum = (...numbers) => {
  let sum = 0;
  numbers.forEach((number) => {
    sum += number;
  });
  return sum;
};
console.log(addNum(1, 3, 5, 7));
