import React, { useContext } from "react";
import UserContext from "./UserContext";

function C({}) {
  const user = useContext(UserContext);
  return (
    <div className="card">
      <div className="card-header">C</div>
      <div className="card-body">im C Component, hello {user.name}</div>
    </div>
  );
}

export default C;
