export const onSearch = ( searchValue ) => dispatch => {
  function getValueSearch( value ) {
    return value.split(' ').join('+')
  }
  dispatch({type: 'CHANGE_SEARCH_TERM', search: getValueSearch( searchValue )});
}
