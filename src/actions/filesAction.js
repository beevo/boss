import { UPDATE_TEXT, CREATE_FILE } from './types';

export const updateText = (value, fileId) => (dispatch) => {
  dispatch({
    type: UPDATE_TEXT,
    payload: {
      value: value,
      fileId: fileId
    }
  });
}
export const createFile = (fileName) => (dispatch) => {
  dispatch({
    type: CREATE_FILE,
    payload: fileName
  });
}
