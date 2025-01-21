// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;
//   document.write(i, "<br />");
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) continue;
//   document.write(i, "<br />");
// }
// for (let i = 1; i <= 3; i++) {
//   for (let k = 1; k <= 2; k++) {
//     document.write(`${i}행 ${k}열`, "<br />");
//   }
//   document.write("<br />");
// }

const marvels = ["ironman", "hulk", "captin", "stranger"];

// for (let i = 0; i < marvels.length; i++) {
//   console.log(marvels[i]);
// }
// call back 함수
marvels.forEach(function (marvel, index, array) {
  console.log(marvel, index, array);
});
