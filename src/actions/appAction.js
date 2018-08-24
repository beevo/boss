import { CHANGE_APP } from './types';
//es6 version.

export const changeApp = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_APP,
    payload: value
  });
}
