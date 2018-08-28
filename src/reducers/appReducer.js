import { CHANGE_APP } from '../actions/types';

const initialState = {
  currentIndex: 0,
  files: [
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
  ],
  apps: [
    {
      id: 0,
      label: 'Codepad',
      componentName: 'Codepad',
      icon: 'code'
    },
    {
      id: 1,
      label: 'Wordpad',
      componentName: 'Wordpad',
      icon: 'insert_drive_file'
    },
    {
      id: 2,
      label: 'News Stand',
      componentName: 'News',
      icon: 'trending_up'
    },
    {
      id: 3,
      label: 'My Files',
      componentName: 'Files',
      icon: 'folder'
    }
  ]
}

export default function(state = initialState, action){
  switch (action.type) {
    case CHANGE_APP:
      return {
        ...state,
        currentIndex: action.payload
      }
    default:
      return state;
  }
}
