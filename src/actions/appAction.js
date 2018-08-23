import { CHANGE_APP } from './types';
//es6 version.

export const changeApp = (value) => (dispatch) => {
  console.log(`change app to ${value}`);
  dispatch({
    type: CHANGE_APP,
    payload: value
  });
}
