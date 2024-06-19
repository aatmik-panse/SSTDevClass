import React, { useEffect, useState } from "react";

export default function Effect() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(0);
  useEffect(
    function () {
      console.log("mounted");
    },
    [count]
  );

  let increment = () => {
    setCount((count += 1));
    console.log("rendered");
  };
  let increment1 = () => {
    setCount1((count1 += 1));
    console.log("1 rendered");
  };
  return (
    <div>
      <h1>{count}</h1>
      <h2>{count1}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={increment1}>Increment 2 </button>
    </div>
  );
}
