import { CHANGE_APP } from '../actions/types';

const initialState = {
  name: "helloworld.js",
  content: "console.log('hello world')"
}

export default function(state = initialState, action){
  // switch (action.type) {
  //   case CHANGE_APP:
  //     return {
  //       ...state,
  //       currentIndex: action.payload
  //     }
  //   default:
      return state;
  // }
}
