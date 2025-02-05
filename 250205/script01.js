const orderButton = document.querySelector("#order");
const orderInfo = document.querySelector("#orderInfo");

orderButton.addEventListener("click", () => {
  const newH = document.createElement("h2");
  const title = document.querySelector(".desc > h2");
  const textNode = document.createTextNode(title.innerText);

  newH.style.fontSize = "2rem";
  newH.style.color = "crimson";

  const newImg = document.createElement("img");
  const srcNode = document.createAttribute("src");

  srcNode.value =
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/14936689-098d-432d-bd47-da897a94f2af/G.T.+HUSTLE+3+EP+OLY.png";

  newImg.setAttributeNode(srcNode);

  newH.appendChild(textNode);
  orderInfo.appendChild(newH);
  orderInfo.appendChild(newImg);
});

const title = document.querySelector("#title");

title.addEventListener("click", function () {
  this.parentNode.removeChild(this);
  // console.log(this.parentNode);
  // this.removeChild(this);
  // this.remove();
});
