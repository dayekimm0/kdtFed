// import React from "react";
// import { IToDo, toDoState } from "../atoms";
// import { useSetRecoilState } from "recoil";

// //스타일
// const Button = styled.button`
//   padding: 8px 10px;
//   background: #000;
//   color: #fff;
//   gap: 6px;
// `;

//출력
// const ToDo = ({ text, category }: IToDo) => {
//   const setToDos = useSetRecoilState(toDoState);
//   const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     console.log(event.currentTarget.name);
//     const {
//       currentTarget: { name },
//     } = event;
// }; //해당 함수만으로는 식별 x ->임의로 name값 붙이기

// const onClick01 = (newCategory: IToDo["category"]) => {
//   console.log("나는 가고싶어", newCategory);
// }; //카테고리값 TODO여야 -> 대괄호표기법으로 찾아오기

//   return (
//     <li>
//       <span>{text}</span>
//       {category !== "TODO" && (
//         <Button name="Todo" onClick={onClick}>
//           ToDo
//         </Button>
//       )}
//       {category !== "DOING" && (
//         <Button name="Doing" onClick={onClick}>
//           Doing
//         </Button>
//       )}
//       {category !== "DONE" && (
//         <Button name="Done" onClick={onClick}>
//           Done
//         </Button>
//       )}
//     </li>
//   ); //todo가 아니면 todo로 -> doing, done만 나오게 -> createToDo값이 현재 TODO
// };

// export default ToDo;

//atoms 초기값 -> createTodo값 처리 -> setToDo로 Atoms의 새로운 값으로 보냄 -> 그값을 useRecoilvalue로 TODolist가 값 받아옴 -> ToDo
