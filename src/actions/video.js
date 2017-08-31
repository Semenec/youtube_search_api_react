import { API_URL, API_KEY, API_METHOD, API_PART, MAX_RESULT  } from '../constants/apiOptions';
import { GET_VIDEO_SUCCESS } from '../constants/actionsTypes';
import { getUrl } from '../assets/func/getUrl';
import { getValueSearch } from '../assets/func/getValueSearch';
import { GET_LOADING, SUCCES_LOADING } from '../constants/isPreloaderTypes';

export const asyncGetVideo = ( searchValue ) => dispatch => {
  dispatch({type: GET_LOADING});
  fetch(getUrl(API_URL, API_METHOD, API_KEY, API_PART, getValueSearch(searchValue), MAX_RESULT))
    .then((response) => {
          return response.json();
        })
    .then((json) => {
      let movieArr = [];
      json.items.map( (movie) => {
        movieArr.push(movie);
      })
      dispatch({type: GET_VIDEO_SUCCESS, video: movieArr});
      dispatch({type: SUCCES_LOADING});
    })
}
