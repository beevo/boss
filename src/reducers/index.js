import { combineReducers } from 'redux';
import appReducer from './appReducer';
import newsReducer from './newsReducer';
import filesReducer from './filesReducer';

export default combineReducers({
  app: appReducer,
  news: newsReducer,
  files: filesReducer
});
