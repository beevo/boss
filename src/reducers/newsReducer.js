import { FETCH_NEWS } from '../actions/types';

const initialState = {
  name: "New York Times - " + new Date().toJSON().slice(0,10).replace(/-/g,'/'),
  content: null
}

const viewWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var MEDIA_INDEX = 4;
if (viewWidth < 1024) {
  MEDIA_INDEX = 3;
}

const parseNews = (content) => {
  return content.map((newsObj, key) => {

    if (key > 20) return null;
    let imgUrl = '';
    if (newsObj.multimedia[MEDIA_INDEX]) {
      imgUrl = newsObj.multimedia[MEDIA_INDEX].url;
    }else {
      return null;
    }
    return {
      imgUrl: imgUrl,
      title: newsObj.title,
      abstract: newsObj.abstract,
      url: newsObj.url
    }
  }).filter(n => n);
}
export default function(state = initialState, action){
  switch (action.type) {
    case FETCH_NEWS:

      return {
        ...state,
        content: parseNews(action.payload)
      }
      // return state;
    default:
      return state;
  }
}
