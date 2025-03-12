import React, { useState } from "react";
import "./Body copy.css";

const Body = () => {
  const [state, setState] = useState({
    name: "",
    gender: "",
    birth: "",
    bio: "",
  });
  // 불변성의 법칙
  const handleOnChange = (e) => {
    setState({ ...setState, [e.target.name]: e.target.value });
  };
  return (
    <div className="wrapper">
      <input
        name="name"
        type="text"
        value={state.name}
        onChange={handleOnChange}
      />
      <select name="gender" value={state.gender} onChange={handleOnChange}>
        <option key={"여성"}>여성</option>
        <option key={"남성"}>남성</option>
      </select>
      <input
        name="birth"
        type="date"
        value={state.birth}
        onChange={handleOnChange}
      />
      <textarea
        name="bio"
        value={state.bio}
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
};

export default Body;
