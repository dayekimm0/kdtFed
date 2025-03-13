import { useState, useRef, useEffect, use } from "react";
import "./App.scss";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // useEffect(() => {
  //   console.log("count 업데이트", count, text);
  // }, [count, text]);

  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
      return;
    } else {
      console.log("컴포넌트 업데이트");
    }
  });

  useEffect(() => {
    console.log("컴포넌트 마운트!");
  }, []); // 의존성 배열을 아예 만들지 않았을 경우 컴포넌트 업데이트, 마운트 시점 모두 반응

  useEffect(() => {
    const intervalID = setInterval(() => {
      console.log("깜빡");
    }, 1000);
    return () => {
      console.log("클린업");
      clearInterval(intervalID);
    };
  });

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  const handleSetCount = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={text} onChange={handleChangeText} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller handleSetCount={handleSetCount} />
      </section>
    </div>
  );
}

export default App;
