import { combineReducers } from 'redux';
import postReducer from './postReducer';
import appReducer from './appReducer';
import codepadReducer from './codepadReducer';
import wordpadReducer from './wordpadReducer';
import newsReducer from './newsReducer';

export default combineReducers({
  posts: postReducer,
  app: appReducer,
  codepad: codepadReducer,
  wordpad: wordpadReducer,
  news: newsReducer
});
