import { useState } from "react";
import WindowTracker from "./WindowTracker";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="App">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}

export default App;
