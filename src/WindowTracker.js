import { useState, useEffect } from "react";

function WindowTracker() {
  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);

  useEffect(() => {
    const watchWidth = (e) => setWindowsWidth(window.innerWidth);
    window.addEventListener("resize", watchWidth);
    return () => {
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1>Window width: {window.innerWidth}</h1>;
}

export default WindowTracker;
