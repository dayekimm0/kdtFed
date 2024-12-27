const form = document.querySelector("form");
const word = form.querySelector("word");
const h1 = document.querySelector("h1");

h1.style.color = "#02c13c";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userValue = word.value;
  console.log(userValue);
  alert(userValue);
});
