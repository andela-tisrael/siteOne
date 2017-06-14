import {combineReducers} from 'redux';
import allCoursesReducer from './coursesReducer';
import courseReducer from './individualCoursesReducer';

const rootReducer = combineReducers({
  courses: allCoursesReducer,
  course: courseReducer
});

export default rootReducer;
