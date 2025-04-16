/* 보통 함수 */
const add1 = (a: number, b: number): number => a + b;

/* 고차 함수 */
const add2 =
  (a: number): ((number: number) => number) =>
  (b: number) =>
    a + b;
// closure = 클로저

const result = add2(1)(2);
