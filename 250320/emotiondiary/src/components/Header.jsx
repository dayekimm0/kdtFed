import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--border-color);
`;

const LeftChild = styled.div`
  width: 25%;
  display: flex;
  justify-content: start;
`;

const Title = styled.div`
  font-size: 2.6rem;
  width: 50%;
  display: flex;
  justify-content: center;
`;

const RightChild = styled.div`
  width: 25%;
  display: flex;
  justify-content: end;
`;

const Header = ({ title, leftChild, rightChild }) => {
  return (
    <Wrapper>
      <LeftChild>{leftChild}</LeftChild>
      <Title>{title}</Title>
      <RightChild>{rightChild}</RightChild>
    </Wrapper>
  );
};

export default Header;
