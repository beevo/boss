import { combineReducers } from 'redux';
import postReducer from './postReducer';
import appReducer from './appReducer';
import codepadReducer from './codepadReducer';

export default combineReducers({
  posts: postReducer,
  app: appReducer,
  codepad: codepadReducer
});
