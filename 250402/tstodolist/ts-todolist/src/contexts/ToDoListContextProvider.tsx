import React from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const ToDoListContextProvider = ({ children }: Props) => {
  return <div>ToDoListContextProvider</div>;
};

export default ToDoListContextProvider;
