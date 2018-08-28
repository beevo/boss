import { combineReducers } from 'redux';
import postReducer from './postReducer';
import appReducer from './appReducer';
import wordpadReducer from './wordpadReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  posts: postReducer,
  app: appReducer,
  wordpad: wordpadReducer,
  news: newsReducer
});
