import React, { useState } from "react";
import "./Body.css";
import Viewer from "./Viewer";

const Body = () => {
  const [number, setNumber] = useState(0);
  const onDecrease = () => {
    setNumber(number - 1);
  };
  const onIncrease = () => {
    setNumber(number + 1);
  };
  return (
    <div className="counterApp">
      <h2>{number}</h2>
      <Viewer number={number} />
      <div className="buttons">
        <button onClick={onDecrease}>-</button>
        <button onClick={onIncrease}>+</button>
      </div>
    </div>
  );
};

export default Body;
