import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  background: var(--navigation);
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const Navigation = () => {
  return (
    <Container>
      <Link to="/">Homepage</Link>
      <Link to="normal-page">NormalPage</Link>
      <Link to="/react-query">React-Query</Link>
    </Container>
  );
};

export default Navigation;
