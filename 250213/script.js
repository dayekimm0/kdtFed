// 원의 넓이

const radius = prompt("반지름의 크기는?");

const area = (r) => {
  return Math.PI * r * r;
};

const circum = (r) => {
  return 2 * Math.PI * r;
};

document.querySelector("#result");

result.innerText = `반지름 : ${radius},
원의 넓이 : ${area(radius).toFixed(3)},
원의 둘레 : ${circum(radius).toFixed(3)}`;

console.log(area(radius).toFixed(3));
console.log(circum(radius));
