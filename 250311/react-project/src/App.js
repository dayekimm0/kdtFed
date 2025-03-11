import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const name = "David";
  return (
    <div className="App">
      <Header />
      <Body name={name} />
      <Footer />
    </div>
  );
}

export default App;
