import { useState } from "react";
import Count from "./components/Count";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <button
        className="counter--minus"
        onClick={(e) => setCounter((prevCounter) => prevCounter - 1)}
      >
        –
      </button>
      <Count counter={counter} />

      <button
        className="counter--plus"
        onClick={(e) => setCounter((prevCounter) => prevCounter + 1)}
      >
        +
      </button>
    </div>
  );
}

export default App;
