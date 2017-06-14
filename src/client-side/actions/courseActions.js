import * as types from './types';
import axios from 'axios';
// import req from '../utils/request';
var CourseApi = require('../server/mockCourseApi');
const api = 'http://localhost:5000/api';
var getCourses = CourseApi.getAllcourses();
console.log(getCourses.default.courses);
export function getAllCoursesSuccess(res) {
  return ({
    type: types.GET_ALL_COURSES_SUCCESS,
    payload: res
  })
}

export function getAllCourses() {
  return CourseApi.getAllcourses();
  // return dispatch => {
  //   req('get', api + '/courses')
  //   .then(res => {
  //     dispatch(getAllCoursesSuccess(res.data));
  //   }).catch(err => {
  //     console.error(err);
  //   });
  // }
}


export function getCourseSuccess(res) {
  return ({
    type: types.GET_COURSE_SUCCESS,
    payload: res
  })
}

// mock api data
export const fetchCourses = () => dispatch =>
    dispatch(getAllCoursesSuccess(getCourses.default.courses));


export function getCourse(id) {
  return dispatch => {
    axios.get(api+'/courses/' + id).then(res => {
      dispatch(getCourseSuccess(res.data));
    }).catch(err => {
      console.error(err);
    });
  }
}

// export function switchPageSuccess(res) {
//   return ({
//     type: types.SWITCH_PAGE,
//     payload: res
//   })
// }
//
// export function goToCoursePage(id) {
//   console.log(id)
//   return dispatch => {
//     axios.get(api+'/courses/' + id).then(res => {
//       dispatch(switchPageSuccess(res.data));
//     }).catch(err => {
//       console.error(err);
//     });
//   }
// }

export function filterShopsSuccess(res) {
  return ({
    type: types.FILTER_SHOPS_SUCCESS,
    payload: res
  })
}

export function filterShops(title) {
  return dispatch => {
    axios.get(api+'/courses/subject/:title').then(res => {
      console.log(res.data)
      dispatch(filterShopsSuccess(res.data));
    }).catch(err => {
      console.error(err);
    });
  }
}
