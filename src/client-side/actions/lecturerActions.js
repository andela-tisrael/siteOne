import * as types from './types';
import req from '../utils/request';
const api = 'http://localhost:5000/api';

export function getLecturerSuccess(res) {
  return ({
    type: types.GET_LECTURER_SUCCESS,
    payload: res
  })
}

// export function getLecturerByCourseId(course_id) {
//   return dispatch => {
//     req('get', api + '/')
//   }
// }
