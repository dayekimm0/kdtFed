// 한글로 지금내가 제어하고자하는 내용이 무엇인지 부터 작성해보기!!

// 논리적이라서!!

// 내가 현재 구현하고자 하는 기능을 대략적이지만 말로표현하지 못한다면, 100% 코딩은 불가하다!!!

// 8개의 face를 대상으로 모션 제어

// 컴퓨터에게 무엇이 8개의 face인지 알려주기

// 8개의 face를 어딘가에 담아서 컴퓨터에게 "이게 8개의 페이스야!" 알려줘야함

// 그 어딘가에 담고자하는 그릇 => 변수

// 해당 모션 : 각각의 face에 마우스를 올리면 회전이 멈춤

// 해당 모션 : 각각의 face에서 마우스가 떠나가면 회전이 정상적으로 진행

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
