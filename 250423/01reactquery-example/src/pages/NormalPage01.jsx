import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { usePostQuery } from "../usePost";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const NormalPage = () => {
  const { data, isLoading, error, IsError } = usePostQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <Container>
        {data?.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
      </Container>
    );
  }
};

export default NormalPage;
