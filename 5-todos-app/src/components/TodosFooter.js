import React, { useContext, useMemo } from "react";
import TodosContext from "../contexts/TodosContext";

function TodosFooter(props) {
  const { todos } = useContext(TodosContext);

  const activeTodosCount = useMemo(() => {
    return todos.filter((todo) => !todo.completed).length;
  }, [todos]);

  return (
    <>
      <hr />
      <div className="d-flex mt-2">
        <div className="p-2">{activeTodosCount} items left</div>
        <div className="p-2">All</div>
        <div className="p-2">Active</div>
        <div className="p-2">Completed</div>
        <hr />
      </div>
      <hr />
    </>
  );
}

export default TodosFooter;
