import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.styles";
import DataView from "./components/DataView";
import InputContainer from "./components/InputContainer";
import ToDoListContextProvider from "./contexts/ToDoListContextProvider";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const mockData = ["React 공부하기", "운동하기", "책읽기"];

function App() {
  const [toDoList, setToDoList] = useState(mockData);

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter((item) => item !== todo));
  };

  const onAdd = (todo: string) => {
    setToDoList([...toDoList, todo]);
  };
  return (
    <>
      <GlobalStyles />
      <Container>
        <DataView toDoList={toDoList} onDelete={onDelete} />
        <InputContainer onAdd={onAdd} />
      </Container>
    </>
  );
}

export default App;
