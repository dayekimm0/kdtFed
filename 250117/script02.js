let a = 10;
let b = a;

let obj1 = {
  c: 10,
  d: "ddd",
};

let obj2 = obj1;

b = 15;
obj2.c = 20;

console.log(a, b);
console.log(obj1, obj2.c);

// CS
// 전통적인 프로그래밍 언어 => 굳이 비효율적으로 낭비될 수 있는 메모리 공간을 생성하지 않기 위해 애초에 해당객체에 얼만큼의 값을 넣을지 정의

let user = {
  name: "david",
  gender: "male",
};

function copy0object(target) {
  let result = {};
  for (let props in target) {
    result[props] = target[props];
  }
  return result;
}
const user2 = copy0object(user);
user2.name = "jane";

console.log(user.name, user2.name);

// Spread Operator = 전개연산자 구문

const fruits = ["apple", "banana", "cherry"];
const favorit = [...fruits];
console.log(fruits, favorit);

favorit[1] = "grape";
console.log(fruits, favorit);

/*
console.log(fruits, favorit);

favorit[1] = "grape";
console.log(fruits, favorit);
*/
