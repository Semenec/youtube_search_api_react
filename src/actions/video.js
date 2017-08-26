const API_URL = 'https://www.googleapis.com/youtube/v3/',
      API_KEY = 'AIzaSyBA6QvkaE6bX_GE22NpRCCMkh59xD01wk4',
      API_METHOD = 'search',
      API_PART = 'snippet',
      MAX_RESULT = '10';

function getUrl( url, key, method, part, valueSearch, result ) {
  return `${url}${key}?key=${method}&part=${part}&q=${valueSearch}&maxResults=${result}`
}

function getValueSearch( value ) {
  return value.split(' ').join('+')
}

export const asyncGetVideo = ( searchValue ) => dispatch => {
  dispatch({type: 'CHANGE_SEARCH_TERM', search: 'cs'});
  dispatch({type: 'CHANGE_SEARCH_TERM', search: 'dota'});
  dispatch({type: 'GET_VIDEO_SEARCH'});
  fetch(getUrl(API_URL, API_METHOD, API_KEY, API_PART, getValueSearch(searchValue), MAX_RESULT))
    .then((response) => {
          return response.json();
        })
    .then((json) => {
      for(let i = 0; i < json.items.length; i++) {
        dispatch({type: 'GET_VIDEO_SUCCESS', video: json.items[i]})
      }
    })
}
