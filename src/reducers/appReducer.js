import { CHANGE_APP, CHANGE_FILE } from '../actions/types';

const initialState = {
  currentIndex: 0,
  apps: [
    {
      id: 0,
      label: 'Codepad',
      componentName: 'Codepad',
      icon: 'code',
      currentFileId: 0
    },
    {
      id: 1,
      label: 'Wordpad',
      componentName: 'Wordpad',
      icon: 'insert_drive_file',
      currentFileId: 1
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
const updateApp = (state, action) => (
  state.apps.map((item, index) => {
    if(item.id === action.payload.id) {
      return {
        ...action.payload
      }
    }
    return item;
  })
);
export default function(state = initialState, action){
  switch (action.type) {
    case CHANGE_APP:
      return {
        ...state,
        currentIndex: action.payload
      }
    case CHANGE_FILE:
      return {
        ...state,
        files: updateApp(state, action)
      }
    default:
      return state;
  }
}
