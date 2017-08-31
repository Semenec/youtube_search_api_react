import { CHANGE_SEARCH_TERM } from '../constants/actionsTypes';

export default function search(state = [], action) {

  switch (action.type) {
    case CHANGE_SEARCH_TERM:
      return [
        action.search
      ]
    default:
      return state;
  }
}
