type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;

// type C = (value) => void;
// type D = (value) => void;

// let c: C = (value) => {};
// let d: D = (value) => {};

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
};

let animalFunc = (animal: Animal) => {
  console.log(animal.name);
};
let dogFunc = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

dogFunc = animalFunc;

// 함수의 매개변수의 개수가 다른 경우
let func1 = () => {};
let func2 = () => {};

const isDog = () => {};
const isCat = () => {};
