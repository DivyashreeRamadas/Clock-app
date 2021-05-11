import React, { useCallback, useEffect, useState } from "react";
import "./index.css"

function App() {

  const [clockState, setClockState] = useState("");

  useEffect(() => {

    setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);
    
    
  },[]);

  return (
    <div className="clock">
      <h1> Clock </h1>
      <div className="timer">
        {clockState}
      </div>
    </div>
  );
}

export default App;
