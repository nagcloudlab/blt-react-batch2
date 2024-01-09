import React from "react";
import TodoInput from "./TodoInput";
import TodosList from "./TodosList";
import TodosFooter from "./TodosFooter";

import todosReducer from "../reducers/todos";
import TodosContext from "../contexts/TodosContext";

function TodosApp(props) {
  const [todos, dispatch] = React.useReducer(todosReducer, [
    { id: 1, title: "Todo 1", completed: false },
    { id: 2, title: "Todo 2", completed: true },
    { id: 3, title: "Todo 3", completed: false },
  ]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center display-1">Todos App</h1>
          <hr />
        </div>
        <TodosContext.Provider value={{ todos, dispatch }}>
          <TodoInput />
          <TodosList />
          <TodosFooter />
        </TodosContext.Provider>
      </div>
    </div>
  );
}

export default TodosApp;
