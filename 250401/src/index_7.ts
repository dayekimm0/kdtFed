type A = number extends string ? number : string;

type ObjA = {};

type ObjB = {
  a: number;
  b: number;
};

type B = ObjB extends ObjA ? number : string;

type StringNumber<T> = T extends number ? string : number;

let varA: StringNumber<number>;
let varB: StringNumber<string>;
// const removeSpaces = (text: string|undefined|null) => {
//   return text.replaceAll(" ", "");
// }else {
//   return undefined;
// }

// let result = removeSpaces("hi im david");
