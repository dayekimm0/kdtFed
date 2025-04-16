const board = document.querySelector(".board");
const h1 = document.createElement("h1");
const itemImg = document.createElement("img");
const resultImg = document.createElement("img");

h1.innerText = "컴퓨터와 가위.바위.보 맞추기 게임!";

const userChoice = prompt("가위, 바위, 보 중 하나를 선택하세요!", "가위");
let gameNum;

switch (userChoice) {
  case "가위":
    gameNum = 1;
    break;
  case "바위":
    gameNum = 2;
    break;
  case "보":
    gameNum = 3;
    break;
  default:
    alert("잘못선택하셨습니다!");
    location.reload();
}

let comChoice = Math.ceil(Math.random() * 3);
itemImg.src = `./imgs/math_img_${comChoice}.jpg`;

if (gameNum === comChoice) {
  resultImg.src = `./imgs/game_1.jpg`;
} else {
  resultImg.src = `./imgs/game_2.jpg`;
}

board.append(h1, itemImg, resultImg);
