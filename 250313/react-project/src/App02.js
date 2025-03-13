import { useState, useRef } from "react";
import "./App.scss";

function App() {
  const [text, setText] = useState("");
  const textRef = useRef();

  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const handleOnClick = () => {
    if (text.length < 5) {
      textRef.current.focus();
    } else {
      alert(text);
      setText("");
    }
  };
  return (
    <div className="App">
      <div className="formList">
        <input
          ref={textRef}
          type="text"
          value={text}
          onChange={handleOnChange}
        />
        <button onClick={handleOnClick}>작성완료</button>
      </div>
    </div>
  );
}

export default App;
