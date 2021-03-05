import { useState, useEffect } from "react";

export function MousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function onMouseMove(event) {
    console.log("mouse move");
    setPosition({ x: event.x, y: event.y });
  }

  useEffect(() => {
    console.log("mounted");
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      console.log("unmounted");
    };
  }, []);

  return (
    <div>
      Mouse position: {position.x}, {position.y}
    </div>
  );
}
