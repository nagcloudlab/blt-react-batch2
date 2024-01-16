import React from "react";

function Navbar({ title }) {
  return (
    <div>
      <div className="display-1">{title}</div>
      <hr />
    </div>
  );
}

export default Navbar;
