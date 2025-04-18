import styled from "styled-components";

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Btn = styled.button`
  background: tomato;
  color: #fff;
  border: none;
  border-radius: 14px;
`;

function App() {
  return (
    <Container>
      <Btn>Log in</Btn>
      <Btn as="a" href="/">
        Log out
      </Btn>
    </Container>
  );
}

export default App;
