import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initalState = {
  // items: [],
  // item: {}
};
const devtools = process.env.NODE_ENV === 'test'
  ? x => x /* eslint-disable no-underscore-dangle */
  : window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  compose(
    applyMiddleware(...middleware),
    devtools
  )

);

export default store;
