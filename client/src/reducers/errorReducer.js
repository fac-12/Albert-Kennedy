import { DISPLAY_ERROR } from '../actions/types'

export default (state = '', action) => {
  switch (action.type) {
    case DISPLAY_ERROR:
      return action.payload;
    default:
      return state;
  }
}
