export default function search(state = [], action) {

if(action.type === 'CHANGE_SEARCH_TERM') {
    return [
      action.search
    ]
  }
  else {
    return state
  }
}
