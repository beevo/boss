import { CHANGE_APP } from '../actions/types';

const initialState = {
  current: 'recents'
}

export default function(state = initialState, action){
  switch (action.type) {
    case CHANGE_APP:
      return {
        ...state,
        current: action.payload
      }
    default:
      return state;
  }
}
