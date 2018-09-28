import { sp } from '@pnp/sp';
import lists from '../config/lists';

export interface ITodo {
  Id?: number;
  Title?: string;
  Completed?: boolean;
}

export const spGetTodos = (): Promise<ITodo[]> => {
  return new Promise((resolve, reject) => {
    sp.web.lists.getByTitle(lists.TODOS).items.get()
      .then((todos) => resolve(todos))
      .catch(error => reject(error));
  });
};

export const spAddTodo = (todo: ITodo): Promise<ITodo> => {
  return new Promise((resolve, reject) => {
    sp.web.lists.getByTitle(lists.TODOS).items.add(todo)
      .then(({ data }) => resolve(data))
      .catch(error => reject(error));
  });
};

export const spUpdateTodo = (id, todo: ITodo): Promise<ITodo> => {
  return new Promise((resolve, reject) => {
    sp.web.lists.getByTitle(lists.TODOS).items.getById(id).update(todo)
      .then(() => resolve({Id: id, ...todo}))
      .catch(error => reject(error));
  });
};

export const spDeleteTodo = (id): Promise<void> => {
  return new Promise((resolve, reject) => {
    sp.web.lists.getByTitle(lists.TODOS).items.getById(id).delete()
      .then(() => resolve())
      .catch(error => reject(error));
  });
};