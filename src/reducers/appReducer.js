import { CHANGE_APP } from '../actions/types';

const initialState = {
  currentIndex: 2,
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
