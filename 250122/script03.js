// [1,3,5,7,9,11,15,17,19]
// 10보다 큰 값만 찾아서 콘솔창에 출력해주세요
//조건문 반복문 활용

const arrs = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// arrs.forEach((arr) => {
//   if (arr > 10) console.log(arr);
// });

for (let i = 0; i < arrs.length; i++) {
  if (arrs[i] > 10) console.log(`${arrs[i]}`);
}
