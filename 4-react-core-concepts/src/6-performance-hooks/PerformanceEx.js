import React, { useState, useMemo, useCallback } from "react";

function PerformanceEx(props) {
  console.log("render");
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number); // expensive func call
  }, [number]);
  const themeStyles = useMemo(() => {
    {
      // expensive object
      return {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      };
    }
  }, [dark]);

  const handleChange = useCallback((e) => {
    setNumber(parseInt(e.target.value));
  });

  return (
    <div className="card">
      <div className="card-header">{"Performance"}</div>
      <div className="card-body">
        <div className="d-flex justify-content-around">
          <div className="alert alert-info">
            <input type="number" value={number} onChange={handleChange} />
            <hr />
            <button onClick={(e) => setDark(!dark)}>change theme</button>
            <hr />
            <div style={themeStyles}>{doubleNumber}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function slowFunction(number) {
  console.log("calling slow function");
  for (let i = 0; i < 1000000000; i++) {}
  return number * 2;
}

export default PerformanceEx;
