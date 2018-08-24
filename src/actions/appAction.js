import { CHANGE_APP } from './types';
import { UPDATE_CODEPAD_TEXT } from './types';
import { UPDATE_WORDPAD_TEXT } from './types';

export const changeApp = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_APP,
    payload: value
  });
}

export const updateCodepadText = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_CODEPAD_TEXT,
    payload: value
  });
}
export const updateWordpadText = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_WORDPAD_TEXT,
    payload: value
  });
}
