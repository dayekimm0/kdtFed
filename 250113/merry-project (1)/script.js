// 한글로 지금 내가 제어하고자 하는 내용이 무엇인지부터 작성하기
// 그 어딘가에 담고자하는 그릇 => 변수
// 해당모션 : 각각의 face에 마우스를 올리면 회전이 멈춤
// 해당모션 : 각각의 face에서 마우스가 떠나가면 회전이 정상적으로 진행

const circle = document.querySelector("#circle");
const articles = circle.querySelectorAll("article");

articles.forEach((article) => {
  article.addEventListener("mouseenter", () => {
    circle.style.animationPlayState = "paused";
  });
  article.addEventListener("mouseleave", () => {
    circle.style.animationPlayState = "running";
  });
});
