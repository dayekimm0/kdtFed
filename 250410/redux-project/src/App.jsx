import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.count);

  const dispatch = useDispatch();

  const inCrease = () => {
    dispatch({ type: "INCREMENT" });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inCrease}>증가</button>
    </div>
  );
}

export default App;
