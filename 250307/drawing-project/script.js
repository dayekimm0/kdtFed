const canvas = document.querySelector("#canvas");
const toolbar = document.querySelector("#toolbar");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - toolbar.offsetHeight;

const canvasoffsetY = canvas.offsetTop; // top으로부터 얼마나 떨어졌는지
const ctx = canvas.getContext("2d");

// 연타 못하게 > 손이 닿아서 동시에 그림 그려지지 않게 방지
// 최초 초기 세팅 값 정의
let isDrawing = false;
let startX;
let startY;
let lineWidth = 2;

// 툴바 이벤트 > canvas style의 영향을 미쳐야 함
// change이벤트 사용해야

toolbar.addEventListener("change", (e) => {
  // toolbar의 색상/굵기 바꾸면 이벤트 탄생
  // console.log(e, e.target, e.target.id, e.target.value);

  if (e.target.id === "stroke") {
    ctx.strokeStyle = e.target.value;
    // e.target.value : 색상값
  }
  if (e.target.id === "lWidth") {
    lineWidth = e.target.value;
  }
});

toolbar.addEventListener("click", (e) => {
  // reset 전체 삭제
  if (e.target.id === "reset") {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
});

// mousedown : 마우스 누른상태로 지속
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  // 그림 그리고 있으니 true
  startX = e.clientX;
  startY = e.clientY;
  // 70만큼 떨어진 지점이라는 것을 유의!
  // 최초 clientX - 마우스다운이 발생한 지점
});

// 마우스오버
canvas.addEventListener("mousemove", (e) => {
  // 중복그림그리기 방지
  if (!isDrawing) return;
  // 그림을 그리지 않은 상황 > mousemove 실행하지 않겠다.
  ctx.lineWidth = lineWidth;
  // lineWidth는 캔버스 속성 = 우리가 정의한 변수의 값
  ctx.lineCap = "round"; // 끝처리 둥글게
  ctx.lineTo(e.clientX, e.clientY - canvasoffsetY); //canvasoffsetY : y축으로 얼만큼 떨어진 지점인지
  ctx.stroke(); // 그림그리기
});

// 마우스up 이벤트 > isdrawing false로 ,
canvas.addEventListener("mouseup", (e) => {
  isDrawing = false;
  ctx.beginPath();
});
