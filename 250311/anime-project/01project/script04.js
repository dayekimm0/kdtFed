const staggerWrap = document.querySelector("ul");
const [col, row] = [9, 3];
const allElm = col * row;

for (let i = 0; i < allElm; i++) {
  const li = document.createElement("li");
  staggerWrap.appendChild(li);
}

anime({
  targets: "ul li",
  easing: "linear",
  duration: 1000,
  scale: anime.stagger([0.5, 1], { grid: [9, 3], from: "center", axis: "z" }),
});
