import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";

//스타일
const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto;
  font-size: 2rem;
  & input[type="email"],
  & input[type="password"] {
    margin: 0 0 20px;
    padding: 14px 20px;
    font-size: 1.8rem;
    &::placeholder {
    }
  }
  & button[type="submit"] {
    width: 100%;
    font-size: 2rem;
  }
`;

const Login = () => {
  const loginUser = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            {/* <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text> */}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="formBasicCheckbox"
          ></Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
