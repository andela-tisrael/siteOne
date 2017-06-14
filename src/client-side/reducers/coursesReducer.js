import * as types from '../actions/types';
import initalState from './initialState';

export default function allCoursesReducer(state = initalState.courses, action) {
  switch(action.type) {
    case types.GET_ALL_COURSES_SUCCESS:
    {
      return action.payload;
    }
    case types.FILTER_SHOPS_SUCCESS:
    {
      return action.payload;
    }
    default:
      return state
  }
}
