import React, { useState } from "react";

function computeIntialState() {
  console.log("computing intial state..");
  return 100;
}

function Counter() {
  console.log("Counter :: render()");
  const [count, setCount] = useState(100);
  //   const [count, setCount] = useState(() => {
  //     console.log("computing intial state..");
  //     return 100;
  //   });
  //const [count, setCount] = useState(computeIntialState);

  const handleIncrement = (value) => {
    //setCount(count + value); // state change
    setCount((prevCount) => prevCount + value);
  };
  const handleDecrement = (value) => {
    // setCount(count - value);
    setCount((prevCount) => prevCount - value);
  };

  const handleIncrementTimes = () => {
    for (let i = 1; i <= 5; i++) {
      console.log("triggering state change ", i);
      //setCount(count + i);
      setCount((prevCount) => prevCount + i); // functional update ( recommended)
    }
  };

  return (
    <div>
      <h6>Counter: {count}</h6>
      <hr />
      <button onClick={(e) => handleIncrement(1)}>+1</button>
      <button onClick={(e) => handleIncrement(10)}>+10</button>
      <button onClick={(e) => handleDecrement(1)}>-1</button>
      <button onClick={(e) => handleDecrement(10)}>-10</button>
      <hr />
      <button onClick={(e) => handleIncrementTimes(5)}>
        5 times trigger state change
      </button>
      <hr />
    </div>
  );
}

export default Counter;
