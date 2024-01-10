import React, { useEffect, useState } from "react";
import DOMRefEx from "./DOMRefEx";
import PrevStateEx from "./PrevStateEx";
function App() {
  return (
    <div className="container">
      <h1 className="display-1">React Core Concepts</h1>
      <h6 className="display-6">Reference-hook</h6>
      <hr />
      {/* <DOMRefEx /> */}
      <PrevStateEx />
    </div>
  );
}

export default App;
