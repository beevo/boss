import { CHANGE_APP } from './types';
import { UPDATE_CODEPAD_TEXT, UPDATE_WORDPAD_TEXT, FETCH_NEWS } from './types';
// import { UPDATE_WORDPAD_TEXT } from './types';
// import { FETCH_NEWS } from './types';
const NYTIMES_API_KEY = '70fd55df9da846b7afe237a85c45914f';
const NYTIMES_API_URL = 'https://api.nytimes.com/svc/topstories/v2/home.json';

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

export const fetchNews = () => (dispatch) => {
  const url = `${NYTIMES_API_URL}?api-key=${NYTIMES_API_KEY}`;
  fetch(url)
    .then(res => res.json())
    .then(data => dispatch({
        type: FETCH_NEWS,
        payload: data.results
      }));
}
