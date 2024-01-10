import React, { useEffect, useState } from "react";
import C1 from "./C1";
import C2 from "./C2";
function App() {
  return (
    <div className="container">
      <h1 className="display-1">React Core Concepts</h1>
      <h6 className="display-6">Custom-hook</h6>
      <hr />

      <C1 />
      <C2 />
    </div>
  );
}

export default App;
