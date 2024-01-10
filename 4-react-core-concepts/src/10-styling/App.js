import React, { useEffect, useState } from "react";
import C1 from "./C1";
import C2 from "./C2";
import Button from "./Button_v2";
import RWDComponent from "./RWDComponent";
function App() {
  return (
    <div className="container">
      <h1 className="display-1">React Core Concepts</h1>
      <h6 className="display-6">Styling</h6>
      <hr />
      {/* <C1 title="component-1" /> */}
      {/* <br /> */}
      {/* <C2 title="component-2" /> */}
      {/* <Button primary>Primary</Button> */}
      {/* <Button primary={false}>Secondary</Button> */}
      {/* <Button primary>Submit</Button> */}
      {/* <Button primary={false}>Cancel</Button> */}
      <RWDComponent />
    </div>
  );
}

export default App;
