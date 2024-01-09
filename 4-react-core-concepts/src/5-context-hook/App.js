import React, { useEffect, useState } from "react";
import A from "./A";
import UserContext from "./UserContext";

function App() {
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser({ name: "John Doe" });
  }, []);
  return (
    <div className="container">
      <h1 className="display-1">React Core Concepts</h1>
      <h6 className="display-6">Context-hook</h6>
      <hr />
      <UserContext.Provider value={user}>
        <A />
      </UserContext.Provider>
      <hr />
      <UserContext.Provider value={{ name: "Foo" }}>
        <A />
      </UserContext.Provider>
    </div>
  );
}

export default App;
