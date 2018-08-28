import { UPDATE_CODEPAD_TEXT } from '../actions/types';

const initialState = {
  name: "helloworld.js",
  content: "console.log('hello world')",
  currentFileId: 0
}

export default function(state = initialState, action){
  switch (action.type) {
    default:
      return state;
  }
}
