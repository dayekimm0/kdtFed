// const marvels = ["Ironman", "Spiderman", "Thor", "Stranger"];

// for (let marvel of marvels) {
//   console.log(marvel);
// }

// const jsBook = {
//   title: "재미있는 자바스크립트",
//   pubDate: "2025-03-01",
//   pages: 270,
//   finished: true,
//   review: function () {
//     console.log("겁나재밌어요!");
//   },
// };

// for (let key in jsBook) {
//   console.log(`${key} : ${jsBook[key]}<br />`);
// }

let stars = parseInt(prompt("별의 개수: "));

// while (stars > 0) {
//   document.write("*");
//   stars--;
// }

do {
  document.write("*");
  stars--;
} while (stars > 0);
