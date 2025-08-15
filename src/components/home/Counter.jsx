import React, { useState } from "react";

const Counter = () => {
  let [count, setCount] = useState(0);
  //   let count = 0;

  const incrementValue = () => {
    console.log(count, "Inc Start");
    // count += 1;
    setCount(++count);
    console.log(count, "Inc End");
  };

  const decrementValue = () => {
    console.log(count, "Dec Start");
    // count -= 1;
    setCount(--count);
    console.log(count, "Dec End");
  };

  console.log("Counter");

  return (
    <div className="flex gap-3 my-5">
      <button onClick={decrementValue} className="border px-4 rounded hover:bg-black/5 border-black">
        -
      </button>
      <span>{count}</span>
      <button onClick={incrementValue} className="border px-4 rounded hover:bg-black/5 border-black">
        +
      </button>
    </div>
  );
};

export default Counter;
