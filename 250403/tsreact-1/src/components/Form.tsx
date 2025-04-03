import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100vh;
`;

const Contents = styled.div`
  padding: 32px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--light-color);
  z-index: 1;
`;

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 16px;
`;

const InputGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-size: 1.4rem;
`;

const Input = styled.input`
  font-size: 1.6rem;
  padding: 4px;
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const Form = () => {
  return (
    <Container>
      <Background />
      <Contents>
        <Title>블로그등록</Title>
        <InputGroup>
          <Label>Title : </Label>
          <Input />
        </InputGroup>
        <InputGroup>
          <Label>Body : </Label>
          <Input />
        </InputGroup>
        <Actions>
          <Button label="등록하기" />
          <Button label="닫기" color="#304ffe" />
        </Actions>
      </Contents>
    </Container>
  );
};

export default Form;
