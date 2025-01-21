// 사용자에게 12달 중 좋아하는 월의 정보를 입력받으세요!! ex 1 => 1월
// 12~2월 : 스키의 계절, 겨울을 좋아하시네요!
// 3~5월 : 책읽기 좋은 봄을 좋아하시네요!
// 6~8월 : 여행가기 좋은 여름을 좋아하시네요!
// 9~11월 : 선선한 날씨인 가을을 좋아하시네요!
// if조건문 활용해서 위 코드 출력
// 가급적, 생성형  AI안쓰고 만들어보기!

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

// const month = prompt("12달 중 좋아하는 월을 입력해주세요!");
// if (month >= 1 && month <= 12) {
//   if (Number(month) = 12 && Number(month) <= 2) {
//     alert("스키의 계절, 겨울을 좋아하시네요!");
//   } else if (Number(month) <= 5) {
//     alert("책읽기 좋은 봄을 좋아하시네요!");
//   } else if (Number(month) <= 8) {
//     alert("여행가기 좋은 여름을 좋아하시네요!");
//   } else (Number(month) <= 11) {
//     alert("선선한 날씨인 가을을 좋아하시네요!");
//   }
// }

let favMonth = prompt("좋아하는 월을 입력하세요");
if (favMonth !== "" || favMonth !== null) {
  favMonth = parseInt(favMonth);
  if (3 <= favMonth && favMonth <= 5) {
    alert("책읽기 좋은 봄을 좋아하시네요!");
  } else if (6 <= favMonth && favMonth <= 8) {
    alert("여행가기 좋은 여름을 좋아하시네요!");
  } else if (9 <= favMonth && favMonth <= 11) {
    alert("선선한 날씨인 가을을 좋아하시네요!");
  } else if (isNaN(favMonth) || 0 === favMonth) {
    alert("정상적인 월을 입력하세요");
  } else {
    alert("스키의 계절, 겨울을 좋아하시네요!");
  }

  window.location.reload();
}
