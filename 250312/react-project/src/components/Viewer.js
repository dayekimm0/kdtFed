import React from "react";

const Viewer = ({ number }) => {
  return <div>{number % 2 === 0 ? "짝수" : "홀수"}</div>;
};

export default Viewer;
