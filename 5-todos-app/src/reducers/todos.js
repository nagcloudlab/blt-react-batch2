// todo = { id: 1, title: "Learn Redux", completed: false }
// todos = [todo1, todo2, todo3]

const todosReducer = (state = [], action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_TODO": {
      let { title } = payload;
      let newTodo = {
        id: state.length + 1,
        title,
        completed: false,
      };
      let newState = [...state, newTodo];
      return newState;
    }
    case "TOGGLE_TODO": {
      let { id } = payload;
      let newState = state.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return newState;
    }
    case "DELETE_TODO": {
      let { id } = payload;
      let newState = state.filter((todo) => todo.id !== id);
      return newState;
    }
    default:
      return state;
  }
};

export default todosReducer;
