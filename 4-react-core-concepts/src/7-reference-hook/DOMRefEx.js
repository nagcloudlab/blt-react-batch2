import React, { useRef } from "react";

function DOMRefEx(props) {
  const inputEleRef = useRef(null);
  const handleClick = (e) => {
    const inputEle = inputEleRef.current;
    inputEle.style.border = "1px solid red";
    inputEle.focus();
  };
  return (
    <div>
      <hr />
      <button onClick={handleClick}>click</button>
      <hr />
      <input ref={inputEleRef} id="inp" />
    </div>
  );
}

export default DOMRefEx;
