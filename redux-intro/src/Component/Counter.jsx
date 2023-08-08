import React from "react";
import { useState } from "react";

export const Counter = () => {
  let [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  const handleReduce = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter:{count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
};
