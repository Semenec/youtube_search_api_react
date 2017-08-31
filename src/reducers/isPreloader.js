import { GET_LOADING, SUCCES_LOADING } from '../constants/isPreloaderTypes';

export default function isPreloader( state = false, action ) {

  switch (action.type) {
    case GET_LOADING:
      return state = true
    case SUCCES_LOADING:
      return state = false
    default:
      return state;
  }
}
