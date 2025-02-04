// window.onload = () => {};

// const button = document.querySelector("button");

// button.onclick = function () {
//   document.body.style.backgroundColor = "green";
// };

// button.addEventListener("click", () => {
//   document.body.style.backgroundColor = "yellow";
// });

document.body.addEventListener("keydown", (event) => {
  document.querySelector(
    "#result"
  ).innerText = `code : ${event.code}, key : ${event.key}`;
});
