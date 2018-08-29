import { UPDATE_TEXT, CREATE_FILE } from '../actions/types';

const initialState = {
  nextId: 2,
  items: [
    {
      id: 0,
      name: "helloworld.js",
      content: "var foo = 'bar';"
    },
    {
      id: 1,
      name: "Welcome.doc",
      content: `<h1>Welcome To Boss</h1><h2>Bee's Operating System Simulator</h2><ul><li>The wordpad app is using the open source quill editor.</li><li>Codepad is using the open source ace editor.</li><li>Both editors will save its content even if you change apps.</li><li>The News Stand is fetching data from the New York Times API.</li><li>Material-UI is the front end UI react framework used.</li></ul><p><br></p><p>This is my first react app. You can check out the source code <a href="https://github.com/beevo/boss" target="_blank">here</a>.</p><p><br></p><p>I'm open to any comments or constructive criticism.</p><p><br></p><p>Hope you enjoy this react demo.</p>`
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
    case CREATE_FILE:
      console.log(action);
      console.log("CREaTE FILE");
      return {
        nextId: state.nextId+1,
        items: [
          ...state.items,
          {
            id: state.nextId,
            name: action.payload.fileName,
            content: ""
          }
        ]
      }
    default:
      return state;
  }
}
