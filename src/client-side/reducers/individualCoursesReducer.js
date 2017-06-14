import * as types from '../actions/types';
import initalState from './initialState';

export default function courseReducer(state = initalState.course, action) {
  switch(action.type) {
    case types.GET_COURSE_SUCCESS: {
      return  action.payload
    }
    default:
      return state
  }
}
