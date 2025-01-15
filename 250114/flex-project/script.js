// 목표 : 사용자가 스크롤을 내렸을 때, header 배경컬러 // banner height를 변경 => 가상 클래스 적용
// 1. 사용자가 지금 스크롤을 내렸어
// > 스크롤 - 브라우저가 가지고 있는 요소
// > 브라우저 지금 스크롤이 내려갔니
// 2-1. header는 html안에서 header라는 태그를 사용하고 있는 요소라고 알리기
// 2-2. 사용자가 스크롤을 내렸으니 빨리 액티브 클래스를 header에게 적용
//
// 브라우저가 가지고 있는 내장객체
// document.querySelector("#circle");
//문서 => 개발자가 직접 작성한 html문서

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector("header").classList.add("active");
  } else {
    document.querySelector("header").classList.remove("active");
  }
});

/* slick slider */
$(document).ready(function () {
  $(".myslider").slick({
    slidesToShow: 3,
    slidesToScorll: 3,
    infinite: false,
    dots: true,
    speed: 300,
  });
});
