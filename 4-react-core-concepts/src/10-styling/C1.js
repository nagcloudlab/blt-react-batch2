import React from "react";

// import "./C1.css";
import styles from "./C1.module.css";
import { withCard } from "./hoc";

function C1(props) {
  return (
    <p
      className={`card-text ${styles["my-class"]}`}
      //   style={{
      //     color: "red",
      //     backgroundColor: "yellow",
      //   }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
      voluptate.
    </p>
  );
}

export default withCard(C1);
