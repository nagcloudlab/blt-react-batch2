import React, { useEffect, useRef, useState } from "react";

// Ref
// mutable obj ref, to hold obj's Ref acrosss many re-renders

function PrevStateEx(props) {
  console.log("render");

  const prevCountRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("effect");
    console.log(count);
    prevCountRef.current = count; // any changes to Ref, will not trigger re-render
  }, [count]);

  return (
    <div>
      <hr />
      prevCount : {prevCountRef.current},count : {count}
      <hr />
      <button onClick={(e) => setCount(count + 1)}>increment</button>
    </div>
  );
}

export default PrevStateEx;
