import { FETCH_NEWS } from '../actions/types';

const initialState = {
  name: "Files",
  content: null
}

export default function(state = initialState, action){
  switch (action.type) {
    default:
      return state;
  }
}
