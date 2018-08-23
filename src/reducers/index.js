import { combineReducers } from 'redux';
import postReducer from './postReducer';
import appReducer from './appReducer';

export default combineReducers({
  posts: postReducer,
  app: appReducer
});
