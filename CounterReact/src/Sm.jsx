import React, { useState, useRef } from "react";

function Sm() {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef(null); // useRef to persist the interval ID

  const handleStart = () => {
    if (!intervalRef.current) { // Prevent starting multiple intervals
      intervalRef.current = setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
    }
  };

  const onStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null; // Clear the interval reference
    }
  };

  return (
    <>
      <div>{counter}</div>
      <button onClick={handleStart}>Start</button>
      <button onClick={onStop}>Stop</button>
    </>
  );
}

export default Sm;
