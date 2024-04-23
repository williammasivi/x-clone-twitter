import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Compteur : {count}</h2>
      <button onClick={incrementCounter}>Incrémenter</button>
    </div>
  );
};

export default Counter;
