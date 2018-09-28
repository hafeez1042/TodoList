import { ITodo } from "../services/todoServices";
import { Todo } from "../const/actionTypes";

export interface ITodosReducer {
  todos: ITodo[];
}

const INITIAL_STATE = {
  todos: [],
};

export default (state: ITodosReducer = INITIAL_STATE, action): ITodosReducer => {
  switch (action.type) {
    case Todo.GET_TODOS_SUCCESS:
      return { ...state, todos: action.payload };

    case Todo.ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload] };

    case Todo.UPDATE_TODO_SUCCESS:
      return {
        ...state, todos: state.todos.map(todo => {
          return todo.Id === action.payload.Id ? { ...todo, ...action.payload } : todo;
        })
      };

    case Todo.DELETE_TODO_SUCCESS:
      return {
        ...state, todos: state.todos.filter(todo => todo.Id !== action.payload)
      };

    default:
      return state;
  }

};