import { useForm } from "react-hook-form";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { toDoState } from "../atoms";

//스타일
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 10px;
  width: 100%;
  hr {
    width: 100%;
  }
`;
const Form = styled.form`
  display: flex;
  gap: 8px;
`;
const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
`;
const Input = styled.input`
  padding: 10px 20px;
  background: #ddd;
  border: none;
`;
const Button = styled.button`
  padding: 10px 20px;
  background: #000;
  color: #fff;
  border: none;
`;
//객체타입정의
interface IForm {
  toDo: string;
}

//출력
const ToDoList = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const hanldeValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TODO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  console.log(toDos);

  return (
    <Container>
      <Title>ToDo's List</Title>
      <hr />
      <Form>
        <Input
          {...register("toDo", { required: "여기에 입력해주세요" })}
          type="text"
          placeholder="TODO를 입력해주세요"
        />
        <Button onSubmit={handleSubmit(hanldeValid)}>추가</Button>
      </Form>
      <ul>
        {toDos.map((toDo) => (
          <li key={toDo.id}>{toDo.text}</li>
        ))}
      </ul>
    </Container>
  );
};

export default ToDoList;
