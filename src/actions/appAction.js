import { CHANGE_APP } from './types';
import { UPDATE_TEXT } from './types';

export const changeApp = (value) => (dispatch) => {
  dispatch({
    type: CHANGE_APP,
    payload: value
  });
}

export const update = (value) => (dispatch) => {
  dispatch({
    type: UPDATE_TEXT,
    payload: value
  });
}
