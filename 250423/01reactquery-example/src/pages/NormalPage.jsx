import React, { useState, useEffect } from "react";
import styled from "styled-components";

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
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchPost = async () => {
    const url = "http://localhost:3000/posts";
    const response = await fetch(url);
    const data = await response.json();
    setIsLoading(false);
    setData(data);
  };

  useEffect(() => {
    fetchPost();
  }, []);

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
