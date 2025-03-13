import React, { useState } from "react";

const Controller = ({ handleSetCount }) => {
  return (
    <div className="buttons">
      <button onClick={() => handleSetCount(-1)}>-1</button>
      <button onClick={() => handleSetCount(-10)}>-10</button>
      <button onClick={() => handleSetCount(-100)}>-100</button>
      <button onClick={() => handleSetCount(+100)}>+100</button>
      <button onClick={() => handleSetCount(+10)}>+10</button>
      <button onClick={() => handleSetCount(+1)}>+1</button>
    </div>
  );
};

export default Controller;
