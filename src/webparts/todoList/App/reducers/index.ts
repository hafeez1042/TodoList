import { combineReducers, Reducer } from 'redux';

const rootReducers: Reducer = combineReducers({
  test: () => ({test: "test"}),
});

export default rootReducers;