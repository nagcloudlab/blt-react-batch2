import React, { useState } from "react";
import Ex from "./Ex5";

function App() {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="container">
      <h1 className="display-1">React Core Concepts</h1>
      <h6 className="display-6">Effect-hook</h6>
      <hr />
      <button onClick={(e) => setToggle(!toggle)}>toggle component</button>
      <hr />
      {toggle && <Ex />}
    </div>
  );
}

export default App;
