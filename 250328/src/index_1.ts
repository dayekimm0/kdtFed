// let a: number | string | boolean;

// a = 1;
// a = "hello";
// a = true;

// let arr: (number | string | boolean)[] = [1, "hello", true];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  language: string;
};
// 객체에서는 프로토타입이 크면클수록 서브타입

type Union1 = Dog | Person;
type Intersection = Dog & Person;

let intersection: Intersection = {
  name: "",
  color: "",
  language: "",
};

let union1: Union1 = {
  name: "",
  color: "",
};

let union2: Union1 = {
  name: "",
  language: "",
};

let union3: Union1 = {
  name: "",
  color: "",
  language: "",
};

type Union2 = {
  name: string;
};

let union4: Union2 = {
  name: "",
};

union4 = union3;
// union3 = union4;

let variable: number & string;
