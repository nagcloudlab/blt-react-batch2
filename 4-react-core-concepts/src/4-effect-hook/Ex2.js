import React, { useState, useEffect } from "react";

function Ex2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("useEffect");
  }, [count]);

  console.log("render");

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default Ex2;
