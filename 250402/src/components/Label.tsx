import React from "react";
import styled from "styled-components";

const Container = styled.span`
  margin: 0 16px;
  font-size: 1.4rem;
`;

interface props {
  readonly data: number;
}

const Label = ({ data }: props) => {
  return <Container>{data}</Container>;
};

export default Label;
