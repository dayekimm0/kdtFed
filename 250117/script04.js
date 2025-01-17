// 사용자로 하여금 화씨온도를 전달받아서 섭씨온도로 변환해서 정보제공

//화씨온도를 어떻게 전달받을것인가
//윈도우라는 화면을 통해서 전달
//전달받은 화씨온도가 어떤 공식을 통해서 섭씨온도가 되게 할 것인가

// BOM : Browser Object Model
const fah = window.prompt("당신이 변환할 화씨온도를 입력하세요!");
// const cel = ((fah - 32) / 1.8).toFixed(1);
const cel = (fah - 32) / 1.8;

alert(`화씨온도 ${fah}는 섭씨온도 ${cel}입니다!`);
84;
