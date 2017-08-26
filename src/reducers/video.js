export default function video(state = [], action) {

if(action.type === 'GET_VIDEO_SUCCESS') {
    return [
      ...state, action.video
    ]
  } else if (action.type === 'GET_VIDEO_SEARCH') {
    state = []
    return state
  }
  else {
    return state
  }
}
