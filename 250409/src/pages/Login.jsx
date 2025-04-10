import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto;
  font-size: 2rem;
  & input[type="email"],
  & input[type="password"] {
    margin: 8px 0 20px;
    padding: 14px 20px;
    font-size: 1.8rem;
    &::placeholder {
      font-size: 1.8rem;
    }
  }
  & button[type="submit"] {
    width: 100%;
    font-size: 2rem;
  }
`;

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setAuthenticate(true);
    navigate("/");
  };
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={loginUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>패스워드</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="danger" type="submit">
            로그인
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
