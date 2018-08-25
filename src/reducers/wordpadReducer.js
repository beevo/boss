import { UPDATE_WORDPAD_TEXT } from '../actions/types';

const initialState = {
  name: "lorem.doc",
  content: "<h1>Lorem</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
}

export default function(state = initialState, action){
  switch (action.type) {
    case UPDATE_WORDPAD_TEXT:
      return {
        ...state,
        content: action.payload
      }
    default:
      return state;
  }
    return state;
}
