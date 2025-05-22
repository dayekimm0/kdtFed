import React from "react";
import { useRouter } from "next/router";

const Book = () => {
  const {
    query: { id },
  } = useRouter();
  return <div>Book Index {id}</div>;
};

export default Book;
