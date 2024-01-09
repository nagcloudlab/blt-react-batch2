import React, { useCallback } from "react";
import TodosContext from "../contexts/TodosContext";

function Todo({ todo }) {
  console.log("Todo:render");
  let { dispatch } = React.useContext(TodosContext);
  const handleDelete = useCallback(() => {
    dispatch({ type: "DELETE_TODO", payload: { id: todo.id } });
  });
  const handleToggle = useCallback(() => {
    dispatch({ type: "TOGGLE_TODO", payload: { id: todo.id } });
  });
  return (
    <div className="d-flex justify-content-around">
      <input type="checkbox" onChange={handleToggle} checked={todo.completed} />
      <div>{todo.title}</div>
      <button onClick={handleDelete} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}

export default Todo;
