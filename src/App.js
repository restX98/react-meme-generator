import React from "react";
import "./App.css";

function App() {
  const [things, setThings] = React.useState(["Thing 1", "Thing 2"]);

  function addThingHandle(e) {
    e.preventDefault();
    setThings((prevState) => [...prevState, "Thing " + (things.length + 1)]);
    console.log(things);
  }

  const thingsElement = things.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addThingHandle}>Add Item</button>
      {thingsElement}
    </div>
  );
}

export default App;
