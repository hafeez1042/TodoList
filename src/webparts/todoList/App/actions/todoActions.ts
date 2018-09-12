export const addTodo = (todo: string) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};
