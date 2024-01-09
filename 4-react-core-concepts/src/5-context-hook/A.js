import React from "react";
import B from "./B";

function A({}) {
  return (
    <div className="card">
      <div className="card-header">A</div>
      <div className="card-body">im A Component</div>
      <B />
    </div>
  );
}

export default A;
