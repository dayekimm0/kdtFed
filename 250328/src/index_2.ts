type Person = {
  name: string;
  age: number;
};

let person: Person = {} as Person; // 타입단언
person.name = "";
person.age = 20;

type Dog = {
  name: string;
  color: string;
};

type DogNew = {
  name: string;
  color: string;
  breed: string;
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
} as Dog;

// let dogAI: DogNew = {
//   name: "돌돌이",
//   color: "brown",
//   breed: "진도",
// };

// // 초과 프로퍼티 검사를 우회해서 넘어간 케이스
// // 슈퍼타입 & 서브타입
// // 업캐스팅 & 다운캐스팅
// let dogNew: Dog = dogAI;

let num1 = 10 as never;
let num2 = 10 as unknown;

num2 = "hello";

// let num3 = 10 as string; 같은 형제끼리는 절대로 타입단언을 할 수가 없음

// 다중단언
let num3 = 10 as unknown as string; // 슈퍼와 서브 관계만 충족하면 가능 10과 unknown 슈퍼서브로 만들기 like 흑마법

// const 단언(이거 쓸 바에는 리터럴방식이나 처음부터 const 쓰기)
// let num4: 10 = 10; 타입리터럴 방식
let num4 = 10 as const;

// not null 단언
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글",
};
