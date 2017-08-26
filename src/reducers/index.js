import { combineReducers } from 'redux';
import video from './video.js';
import search from './search.js';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  video,
  search
})