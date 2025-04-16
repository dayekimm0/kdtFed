const button = document.querySelector("#btn");

const showPrice = () => {
  const originPrice = Number(document.querySelector("#origin-price").value);
  const rate = Number(document.querySelector("#rate").value);

  const savedPrice = originPrice * (rate / 100);
  const resultPrice = originPrice - savedPrice;

  document.querySelector(
    "#result"
  ).innerText = `할인된 금액은 ${resultPrice}입니다!`;
};
button.addEventListener("click", showPrice);
