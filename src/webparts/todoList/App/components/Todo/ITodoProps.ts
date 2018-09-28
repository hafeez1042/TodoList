import { ITodosReducer } from "../../reducers/todosReducer";
import { addTodo, updateTodo, getTodos } from "../../actions/todoActions";

export interface ITodoProps {}
export interface ITodoStateProps {
  todo: ITodosReducer;
}
export interface ITodoDispatchProps {
  addTodo: typeof addTodo;
  updateTodo: typeof updateTodo;
  getTodos: typeof getTodos;
}
