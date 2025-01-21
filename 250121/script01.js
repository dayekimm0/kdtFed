// const userInput = prompt("이름을 입력하세요!");
// console.log(userInput);

// if (userInput === "" || userInput === null) {
//   console.log("값이 없습니다!");
// } else {
//   alert(`${userInput}님 좋은 아침이에요!`);
// }

//중첩 if조건문
// const score = prompt("내 인생 점수!");
// if (score !== "" || score !== null) {
//   if (Number(score) >= 90) {
//     alert("나름 잘 살았다!");
//   } else if (Number(score) >= 80) {
//     alert("이정도면 괜찮아!");
//   } else {
//     alert("지금부터 열심히 해보자!");
//   }
// }

//짝 홀 구문 if 조건문
// let userNumber = Number(prompt("숫자를 입력하세요!"));

// if (userNumber !== "" || userNumber !== null) {
//   userNumber = parseInt(userNumber);
//   // if (userNumber % 2 === 0) {
//   //   alert(`${userNumber}는 짝수 입니다`);
//   // } else {
//   //   alert(`${userNumber}는 홀수 입니다!`);
//   // }
//   userNumber % 2 === 0
//     ? alert(`${userNumber}는 짝수 입니다`)
//     : alert(`${userNumber}는 홀수 입니다!`);
// }

const webPage = prompt(
  "네이버, 구글, 다음 중 즐겨 사용하는 사이트는 어디인가요?"
);
let url;

switch (webPage) {
  case "네이버":
    url = "https://www.naver.com";
    break;
  case "구글":
    url = "https://google.com";
    break;
  case "다음":
    url = "https://daum.net";
    break;
  default:
    alert("보기 중에 존재하지 않는 사이트입니다!");
}

if (url) {
  window.location.href = url;
}
