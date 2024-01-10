import React, { useState, useEffect } from "react";
import { useOnline } from "./hooks";
function C2(props) {
  const isOnline = useOnline();
  return (
    <div className="card">
      <div className="card-header">C2</div>
      <div className="card-body">
        im am Component-2
        <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
      </div>
    </div>
  );
}

export default C2;
