import React from "react";

import styles from "./RWDComponent.module.css";

// guidlines to make a component responsive:
// 1. define the breakpoints
// 2. define the media queries
// 3. define the styles for each breakpoint

function RWDComponent(props) {
  return (
    <div className="card">
      <div className="card-header">RWD component</div>
      <div className={`card-body ${styles["my-style"]}`}>
        <p> This is RWD component</p>
      </div>
    </div>
  );
}

export default RWDComponent;
