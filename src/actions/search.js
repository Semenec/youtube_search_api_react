import { CHANGE_SEARCH_TERM } from '../constants/actionsTypes';
import { getValueSearch } from '../assets/func/getValueSearch';

export const onSearch = ( searchValue ) => dispatch => {

  dispatch({type: CHANGE_SEARCH_TERM, search: getValueSearch( searchValue )});
}
