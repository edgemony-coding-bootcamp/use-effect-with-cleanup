import { MousePosition } from "./MousePosition";
import "./App.css";
import { useState } from "react";

function App() {
  const [isPositionVisible, setPositionVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setPositionVisible(!isPositionVisible)}>
        {isPositionVisible ? "Hide" : "Show"} mouse position
      </button>
      {isPositionVisible && <MousePosition />}
    </div>
  );
}

export default App;
