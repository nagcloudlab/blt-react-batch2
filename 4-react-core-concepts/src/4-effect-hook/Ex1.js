import React, { useState, useEffect } from "react";

function Ex1(props) {
  console.log("DataFetchingComponent::render()");
  const [data, setData] = useState([]);
  const [resource, setResource] = useState("");

  useEffect(() => {
    console.log("effect - resource change");
    if (resource) {
      fetch(`https://jsonplaceholder.typicode.com/${resource}?_limit=10`)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [resource]);

  const handleResourceChange = (resourceType) => {
    setResource(resourceType);
  };

  return (
    <div className="card">
      <div className="card-header">Data - {resource}</div>
      <div className="card-body">
        <hr />
        <button onClick={(e) => handleResourceChange("todos")}>Todos</button>
        &nbsp;
        <button onClick={(e) => handleResourceChange("users")}>Users</button>
        <hr />
        {JSON.stringify(data)}
      </div>
    </div>
  );
}

export default Ex1;
