import React, { useEffect, useState } from "react";
import PerformanceEx from "./PerformanceEx";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ name: "John Doe" });
  }, []);
  return (
    <div className="container">
      <h1 className="display-1">React Core Concepts</h1>
      <h6 className="display-6">Performance-hook</h6>
      <hr />
      <PerformanceEx />
    </div>
  );
}

export default App;
