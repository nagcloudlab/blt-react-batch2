import React, { useState, useEffect } from "react";
import { useOnline } from "./hooks";

function C1(props) {
  const isOnline = useOnline();
  return (
    <div className="card">
      <div className="card-header">C1</div>
      <div className="card-body">
        im am Component-1
        <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>
      </div>
    </div>
  );
}

export default C1;
