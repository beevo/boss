import { UPDATE_TEXT } from './types';

export const updateText = (value, fileId) => (dispatch) => {
  dispatch({
    type: UPDATE_TEXT,
    payload: {
      value: value,
      fileId: fileId
    }
  });
}
