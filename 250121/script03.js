// 사용자의 로그인을 허락해주고자한다
// 사용자가 로그인을 하기위한 정상적인정보 id=ezen1234 pw=1234567
// 사용자에게 아이디와 패스워드를 받아서 정상적인 정보라면 "00님 반값습니다" 라는 알림창이 나오게 해주세요
// 만약 id가 잘못된 정보라면, "id가 일치하지 않습니다." 라는 메세지를 알림창으로 전달
// 만약 pw가 잘못된 정보라면, "pw가 일치하지 않습니다."

// let favMonth = prompt("좋아하는 월을 입력하세요");
// if (favMonth !== "" || favMonth !== null) {
//   favMonth = parseInt(favMonth);
//   if (3 <= favMonth && favMonth <= 5) {
//     alert("책읽기 좋은 봄을 좋아하시네요!");
//   } else if (6 <= favMonth && favMonth <= 8) {
//     alert("여행가기 좋은 여름을 좋아하시네요!");
//   } else if (9 <= favMonth && favMonth <= 11) {
//     alert("선선한 날씨인 가을을 좋아하시네요!");
//   } else if (isNaN(favMonth) || 0 === favMonth) {
//     alert("정상적인 월을 입력하세요");
//   } else {
//     alert("스키의 계절, 겨울을 좋아하시네요!");
//   }

//   window.location.reload();
// }
// let user = prompt("이름을 입력해주세요");
// let id = prompt("아이디를 입력해주세요");
// let pw = prompt("비밀번호를 입력해주세요");

// if (id === "ezen1234") {
//   if (pw === "1234567") {
//     alert(`${user}님 반갑습니다!`);
//   } else {
//     alert("pw가 일치하지 않습니다");
//   }
//   else if (id !== "ezen1234") {
//     alert("id가 일치하지 않습니다");
//   } else alert("pw가 일치하지 않습니다.");
// }

const id = "ezen1234";
const pw = "1234567";

const userName = prompt("당신의 이름을 입력하세요");
if (userName !== "" && userName !== null) {
  const userId = prompt(`&{userName}님 아이디를 입력하세요`);
  if (userId !== "" && userId !== null) {
    if (userId === id) {
      const userPw = prompt(`${userName}님 반갑습니다 패스워드를 입력하세요`);
      if (userPw === pw) {
        alert(`${userName}님 오늘도 좋은 하루 되세요`);
      } else {
        alert("패스워드가 일치하지 않습니다");
        location.reload();
      }
    } else {
      alert("아이디를 입력하세요");
      location.reload;
    }
  } else {
    alert("정상적인 이름을 입력하세요");
    location.reload;
  }
}
