// import * as types from './types';
// import axios from 'axios';
// import req from '../utils/request';
// const api = 'http://localhost:5000/api';
//
// export function getCourseSuccess(res) {
//   return ({
//     type: types.GET_COURSE_SUCCESS,
//     payload: res
//   })
// }
//
// export function getCourse(id) {
//   return dispatch => {
//     axios.get(api+'/courses/' + id).then(res => {
//       dispatch(getCourseSuccess(res.data));
//     }).catch(err => {
//       console.error(err);
//     });
//   }
// }
