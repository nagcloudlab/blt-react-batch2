import React from "react";

// import "./C2.css";
import styles from "./C2.module.css";
import { withCard } from "./hoc";

function C2(props) {
  return (
    <p className={`card-text ${styles["my-class"]}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
      voluptate.
    </p>
  );
}

export default withCard(C2);
