import { useState } from "react";
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
      <div className="counter--count">
        <h1>{counter}</h1>
      </div>
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
