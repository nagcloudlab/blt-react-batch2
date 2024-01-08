import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css"; // css as module

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App title="React Core Concepts" version="v18" />);

// const obj = {
//   title: "React Core Concepts",
//   version: "v18",
// };

// root.render(<App title={obj.title} version={obj.version} />);

// root.render(
//   <App {...obj}>
//     <div>Child 1</div>
//     <div>Child 2</div>
//     <div>Child 3</div>
//   </App>
// );
