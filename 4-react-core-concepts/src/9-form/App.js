import React, { useEffect, useState } from "react";
import FeedbackForm from "./FeedbackForm_v2";
function App() {
  return (
    <div className="container">
      <h1 className="display-1">React Core Concepts</h1>
      <h6 className="display-6">Form</h6>
      <hr />
      <FeedbackForm />
    </div>
  );
}

export default App;
