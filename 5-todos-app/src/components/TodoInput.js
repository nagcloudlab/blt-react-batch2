import React from "react";
import TodosContext from "../contexts/TodosContext";

function TodoInput({}) {
  const { dispatch } = React.useContext(TodosContext);
  const handleKeup = (e) => {
    if (e.keyCode === 13) {
      dispatch({ type: "ADD_TODO", payload: { title: e.target.value } });
      e.target.value = "";
    }
  };
  return (
    <div className="form-group mt-2">
      <input
        onKeyUp={(e) => handleKeup(e)}
        type="text"
        className="form-control"
        placeholder="Enter Todo"
      />
    </div>
  );
}

export default TodoInput;
