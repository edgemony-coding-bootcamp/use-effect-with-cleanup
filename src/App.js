import { MousePosition } from "./MousePosition";
import "./App.css";
import { useState } from "react";
import Passengers from "./Passengers";

function App() {
  const [isPositionVisible, setPositionVisible] = useState(false);
  const [isPassengersVisible, setPassengersVisible] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setPositionVisible(!isPositionVisible)}>
        {isPositionVisible ? "Hide" : "Show"} mouse position
      </button>
      {isPositionVisible && <MousePosition />}
      <button onClick={() => setPassengersVisible(!isPassengersVisible)}>
        {isPassengersVisible ? "Hide" : "Show"} passengers
      </button>
      {isPassengersVisible && <Passengers />}
    </div>
  );
}

export default App;
