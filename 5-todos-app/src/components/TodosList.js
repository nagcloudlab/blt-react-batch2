import React, { useContext } from "react";
import Todo from "./Todo";
import TodosContext from "../contexts/TodosContext";

function TodosList(props) {
  const { todos } = useContext(TodosContext);
  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li key={todo.id} className="list-group-item">
          <Todo key={todo.id} todo={todo} />
        </li>
      );
    });
  };
  return <ul className="list-group mt-2">{renderTodos()}</ul>;
}

export default TodosList;
