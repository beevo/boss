import { UPDATE_TEXT } from '../actions/types';

const initialState = {
  nextId: 2,
  items: [
    {
      id: 0,
      name: "helloworld.js",
      content: "console.log('hello world')"
    },
    {
      id: 1,
      name: "lorem.doc",
      content: "<h1>Lorem</h1><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>"
    }
  ]
};
const updateItems = (items, content, fileId) => (
  items.map((item, index) => {
    if(item.id === fileId) {
      return {
        ...item,
        content: content
      }
    }
    return item;
  })
);
export default function(state = initialState, action){
  switch (action.type) {
    case UPDATE_TEXT:
      const { value, fileId } = action.payload;
      return {
        ...state,
        items: updateItems(state.items, value, fileId)
      }
    default:
      return state;
  }
}
