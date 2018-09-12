import { ITodosReducer } from "../../reducers/todosReducer";

export interface ITodoProps {}
export interface ITodoStateProps {
  todo: ITodosReducer;
}
export interface ITodoDispatchProps {
  addTodo: (todo: string) => void;
}
