import { FETCH_NEWS } from '../actions/types';

const initialState = {
  name: "New York Times: " + new Date().toJSON().slice(0,10).replace(/-/g,'/'),
  content: null
}

export default function(state = initialState, action){
  switch (action.type) {
    case FETCH_NEWS:
      console.log(action);
      console.log("FETCHING");
      return {
        ...state,
        content: action.payload
      }
      // return state;
    default:
      return state;
  }
}
