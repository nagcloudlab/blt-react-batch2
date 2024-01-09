import React, { useState, useEffect } from "react";

function DataFetchingComponent(props) {
  console.log("DataFetchingComponent::render()");
  const [data, setData] = useState([]);
  const [resourceType, setResourceType] = useState("todos");

  useEffect(() => {
    console.log("effect ");

    // e.g side effects

    // - data fetching
    // - manual DOM manipulation
    // - event listeners or timeouts and intervals
    // - subscriptions

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}?_limit=10`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
    return () => {
      console.log("cleanup - resource change");
    };
  }, [/*props*/ /*state*/ resourceType]);

  const handleResourceTypeChange = (resourceType) => {
    setResourceType(resourceType);
  };

  return (
    <div className="card">
      <div className="card-header">Data - {resourceType}</div>
      <div className="card-body">
        <hr />
        <button onClick={(e) => handleResourceTypeChange("todos")}>
          Todos
        </button>
        &nbsp;
        <button onClick={(e) => handleResourceTypeChange("users")}>
          Users
        </button>
        <hr />
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default DataFetchingComponent;
