import { UPDATE_CODEPAD_TEXT } from './types';
//es6 version.

export const update = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_CODEPAD_TEXT,
    payload: value
  });
}
