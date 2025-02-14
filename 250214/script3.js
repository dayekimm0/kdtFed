// 사용자에게 지름 & 높이의 값을 받아서 원기둥의 부피를 구하는 프로그램 코드를 작성하세요
// 원기둥의 부피를 구하는 공식 = 밑면적 X 높이
// 밑면적 = Math.PI * R * R

// 어떤 원기둥을 예상하더라도 해당 결과값이 출력될 수 있도록 생성자 함수를 활용해서 코드를 구현

// 어떤 원기둥을 예상하더라도 해당 결과값이 출력될 수 있도록 생성자함수를 활용해서 코드를 구현

// 생성자 함수를 왜 사용하는가?

// 객체 만들기 => 정적인 속성값 관리 & 사용자의 요구사항에 따른 메서드 함수도 자유롭게 만들 수 있다는 것을 의미

const button = document.querySelector('input[type="button"]');
const result = document.querySelector("#result");

// function Cylinder(CylinderDiameter, CylinderHeight) {
//   this.diameter = CylinderDiameter;
//   this.height = CylinderHeight;
//   this.getVolume = function () {
//     const radius = this.diameter / 2;
//     return (Math.PI * radius * radius * this.height).toFixed(2);
//   };
// }

class Cylinder {
  constructor(CylinderDiameter, CylinderHeight) {
    this.diameter = CylinderDiameter;
    this.height = CylinderHeight;
  }
  getVolume() {
    const radius = this.diameter / 2;
    return (Math.PI * radius * radius * this.height).toFixed(2);
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  const diameter = document.querySelector("#cyl-diameter").value;
  const height = document.querySelector("#cyl-height").value;

  if (diameter === "" || height === "") {
    result.innerText = "지름과 높이값을 입력하세요!";
  } else {
    const Cylinder = new Cylinder(parseInt(diameter), parseInt(height));
    result.innerText = `원기둥의 부피는 ${Cylinder.getVolume()}입니다.`;
  }
});
