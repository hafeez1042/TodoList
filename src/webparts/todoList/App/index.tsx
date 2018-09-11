import * as React from 'react';
import { createStore, Store, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import Routes from './Routes/Routes';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import Layout from './components/Layout/Layout';
export interface IAppProps {
  // context: WebPartContext;
}

export default (props: IAppProps): JSX.Element => {
  const composeEnhancers =
    typeof window === 'object' &&
      window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] ?
      window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]({
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(ReduxThunk),
  );
  const store: Store = createStore(reducers/*, preloadedState */, enhancer);
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
};
