import React, { useState, useEffect } from "react";

function CleanupEffectComponent() {
  console.log("CleanupEffectComponent:render");
  const [time, setTime] = useState("00:00:00");
  useEffect(() => {
    console.log("effect");
    const intervalId = setInterval(() => {
      console.log("timer");
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      console.log("cleanup");
      clearInterval(intervalId);
    };
  }, []);

  return <div>Ex5 component - {time}</div>;
}

export default CleanupEffectComponent;
