import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';

const initalState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initalState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )

);

export default store;
