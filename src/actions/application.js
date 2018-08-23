import { CHANGE_APP } from './types';

// export function fetchPosts(){
//   //due to thunk, you can use dispatch as a param
//   //dispatch sends an ACTION
//   return function (dispatch){
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(res => res.json())
//       .then(posts => dispatch({
//         type: FETCH_POSTS,
//         payload: posts
//       }));
//   }
// }

//es6 version.

export const changeApp = () => (dispatch) => {
  console.log("change app!");
}
