
export interface ITodosReducer {
  todos: string[];
}

const INITIAL_STATE = {
  todos: [],
};

export default (state: ITodosReducer = INITIAL_STATE, action): ITodosReducer => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    default:
      return state;
  }

};