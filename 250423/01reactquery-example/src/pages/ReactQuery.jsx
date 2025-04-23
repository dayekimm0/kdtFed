import React from "react";
import styled from "styled-components";
import { usePostQuery } from "../usePost";
import axios from "axios";
import { useQueries } from "@tanstack/react-query";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const ReactQuery = () => {
  // const { data, isLoading, error, isError, refetch } = usePostQuery();
  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }
  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }
  const ids = [1, 2, 3, 4];
  const fetchPostDetail = (id) => {
    return axios.get(`http://localhost:3000/posts/${id}`);
  };

  const results = useQueries({
    queries: ids.map((id) => {
      return {
        queryKey: ["posts", id],
        queryFn: () => fetchPostDetail(id),
      };
    }),
    combine: (results) => {
      return {
        data: results.map((result) => result.data),
      };
    },
  });

  console.log(results);
  //   return (
  //     // <Container>
  //     //   {data?.map((item) => (
  //     //     <div key={item.id}>{item.title}</div>
  //     //   ))}
  //     //   <button onClick={refetch}>Posts 리스트 새로고침</button>
  //     // </Container>
  // )
};

export default ReactQuery;
