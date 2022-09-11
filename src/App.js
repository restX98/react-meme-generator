import { useState } from "react";
import Box from "./components/Box";
import boxes from "./boxes";
import "./App.css";

function App() {
  const [boxesArray, setBoxesArray] = useState(boxes);

  function toggle(id) {
    setBoxesArray((prevBoxesArray) =>
      prevBoxesArray.map((el) => {
        return el.id === id ? { ...el, on: !el.on } : el;
      })
    );
  }

  const boxElements = boxesArray.map((box) => (
    <Box key={box.id} id={box.id} on={box.on} onClick={() => toggle(box.id)} />
  ));

  return (
    <div className="App">
      <h1>Boxes will go here</h1>
      <div className="boxes">{boxElements}</div>
    </div>
  );
}

export default App;
