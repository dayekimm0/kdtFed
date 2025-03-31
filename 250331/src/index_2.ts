// 특정 값을 인자값으로 받아서 해당 값을 반환하는 함수를 선언
// 위 특정 값이 숫자, 문자, 객체, 배열이 예측불가!

const func = (value: any) => {
  return value;
};

let num = func(10);

let str = func("Hello");

num.toUpperCase();

// const func = (value) => {
//   return value;
// };
