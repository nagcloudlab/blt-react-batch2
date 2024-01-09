import React, { useContext } from "react";
import C from "./C";
import UserContext from "./UserContext";
function B({}) {
  const user = useContext(UserContext);
  return (
    <div className="card">
      <div className="card-header">B</div>
      <div className="card-body">
        im B Component , hello {user.name}
        <C />
      </div>
    </div>
  );
}

export default B;
