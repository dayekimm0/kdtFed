// 구구단

// for (let a = 2; a <= 9; a++) {
//   for (let b = 1; b <= 9; b++) {
//     document.write(`${a}x${b}=${a * b}`);
//     document.write("<br />");
//   }
// }
let num = 1;
let tag = "<table border=1>";

for (let i = 1; i <= 5; i++) {
  tag += "<tr>";
  for (let c = 1; c <= 5; c++) {
    tag += "<td>" + num + "</td>";
    num++;
  }
  tag += "</tr>";
}
tag += "</table>";

document.write(tag);
