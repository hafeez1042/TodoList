import { combineReducers, Reducer } from 'redux';
import todo from './todosReducer';
const rootReducers: Reducer = combineReducers({
  todo,
});

export default rootReducers;