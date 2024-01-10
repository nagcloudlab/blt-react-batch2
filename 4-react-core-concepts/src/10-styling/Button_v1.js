import React from "react";

function Button({ primary, children }) {
  const style = {
    backgroundColor: primary ? "blue" : "red",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };
  return <button style={style}>{children}</button>;
}

export default Button;
