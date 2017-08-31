import { GET_VIDEO_SUCCESS } from '../constants/actionsTypes';

export default function video(state = [], action) {
  switch (action.type) {
    case GET_VIDEO_SUCCESS:
      return [
      state = action.video
      ]
    default:
      return state;

  }
}
