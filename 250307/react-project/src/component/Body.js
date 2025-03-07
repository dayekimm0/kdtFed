import React from "react";

const Body = () => {
  const numberA = 1;
  const numberB = 2;

  const strA = "Hello";
  const strB = "World!";

  const boolA = true;
  const boolB = false;
  return (
    <React.Fragment>
      <h1>Body</h1>
      <h2>{numberA + numberB}</h2>
      <h2>{strA + strB}</h2>
      <h2>{String(boolA && boolB)}</h2>
    </React.Fragment>
  );
};

export default Body;

// 1) 선언부에서 정의한 변수의 값을 중괄호로 마크업한 이후에 출력부로 가져가서 출력시킬수
// 2) 선언부에서 선언한 변수의 값을 산술표현식으로 JSX문법 내 사용 가능
// 3) 자바스크립트 내 원시타입의 자료는 거의 대부분 JSX 문법 내 프리패스
// 4) 참조타입의 자료형은 절대로 그냥 올 수 없음 반드시 참조타입 내 하위 변수값을 선택해서 가져와야함
// 5) JSX도 여튼 마크업 언어를 흉내낸 문법 - 일반적이고 열고 닫음에 대한 기준
// 예외 -> 컴포넌트의 경우, 열고 닫음을 한 번에 사용할 수 있음
// 6) 반드시 최상위 부모 태그가 존재해야 함
// 대체 : 아무것도 존재하지 않는 빈 태그를 입력해도 됨
