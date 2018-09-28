import { ITodo, spGetTodos, spAddTodo, spUpdateTodo, spDeleteTodo } from "../services/todoServices";
import { Todo } from '../const/actionTypes';

export const getTodos = () => {
  return dispatch => {
    spGetTodos()
      .then(todos => {
        dispatch({
          type: Todo.GET_TODOS_SUCCESS,
          payload: todos,
        });
      }).catch(error => {
        dispatch({
          type: Todo.GET_TODOS_FAIL,
          payload: error,
        });
      });
  };
};

export const addTodo = (todo: ITodo) => {
  return dispatch => {
    spAddTodo(todo)
    .then(_todo => {
      dispatch({
        type: Todo.ADD_TODO_SUCCESS,
        payload: _todo,
      });
    }).catch(error => {
      dispatch({
        type: Todo.ADD_TODO_FAIL,
        payload: error,
      });
    });
  };
};

export const updateTodo = (id: number, todo: ITodo) => {
  return dispatch => {
    spUpdateTodo(id, todo)
    .then(_todo => {
      dispatch({
        type: Todo.UPDATE_TODO_SUCCESS,
        payload: _todo,
      });
    }).catch(error => {
      dispatch({
        type: Todo.UPDATE_TODO_FAIL,
        payload: error,
      });
    });
  };
};

export const deleteTodo = (id: number) => {
  return dispatch => {
    spDeleteTodo(id)
    .then(() => {
      dispatch({
        type: Todo.DELETE_TODO_SUCCESS,
        payload: id,
      });
    }).catch(error => {
      dispatch({
        type: Todo.DELETE_TODO_FAIL,
        payload: error,
      });
    });
  };
};
