import React, { useState } from "react";

/**
 * jsx => template syntax, that looks like HTML, but not HTML
 */

function App_v1() {
  return (
    <div>
      <div className="container">
        <h1 className="display-1">React Core Concepts</h1>
        <h6 className="display-6">JSX</h6>
      </div>
      <hr />
      {1 + 1}
      <br />
      {1 == 1 ? "True" : "False"}
      <br />
      {1 == 1 ? <h1>True</h1> : <h1>False</h1>}
      {new Date().toLocaleTimeString()}
      <br />
      {true} {false} {undefined} {null}
      <br />
      {["a", "b", "c"].map((item, idx) => {
        return <h1 key={item}>{item}</h1>;
      })}
    </div>
  );

  // return null;
}

// ---------------------------------------------------------

/**
 * props  => data to the component, that comes from outside ( parent component ), immutable
 */

function App_v2(props) {
  // Error: Cannot assign to read only property 'title' of object '#<Object>'
  //props.title = "New Title";
  let { title, version } = props;
  return (
    <div>
      <div className="container">
        <h1 className="display-1">
          {title}:{version}
        </h1>
        <h6 className="display-6">props</h6>
      </div>
      <hr />
      {/* {children} */}
      <ul className="list-group">
        {children.map((child, idx) => {
          return (
            <li key={idx} className="list-group-item">
              {child}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ---------------------------------------------------------

/**
 * state  => data inside component, that changes over time on user events
 */
function App_v3(props) {
  console.log("App::render()");
  let { title, version } = props;
  const [count, setCount] = useState(10); // state-managent hook
  const incrementHandler = (e) => {
    setCount(count + 1); // re-render the component on Virtual DOM, then compare with real DOM, then update the real DOM
  };
  const decrementHandler = (e) => {
    setCount(count - 1);
  };
  return (
    <div className="container">
      <div className="container">
        <h1 className="display-1">
          {title}:{version}
        </h1>
        <h6 className="display-6">state</h6>
      </div>
      <hr />
      <div className="card">
        <div className="card-header">Counter</div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <h1>{count}</h1>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-6">
              <div className="d-flex justify-content-around">
                <button onClick={incrementHandler} className="btn btn-primary">
                  +1
                </button>
                <button onClick={decrementHandler} className="btn btn-danger">
                  -1
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App_v3;
