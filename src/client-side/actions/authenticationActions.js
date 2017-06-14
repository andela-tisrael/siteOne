import * as types from './types';
import axios from 'axios';
const api = 'http://localhost:5000/api';

export function loginSuccess(user) {
  return ({
    type: types.LOGIN_SUCCESS,
    payload: user
  })
}

export function loginError(errors) {
  return ({
    type: types.LOGIN_FAILURE,
    errors: errors
  })
}

export function login(response) {
return dispatch => {
    axios.post(api + '/users/google', {
      profileObj: response.profileObj
    }).then(res => {
      localStorage.setItem('authorization', res.data.token);
      dispatch(loginSuccess(res.data.user));
    }).catch(err => {
      dispatch(loginError([err]));
    });
  }
}

export function tokenAuth(token) {
return dispatch => {
    axios.post(api + '/users/tokenAuth', {
      token: token
    }).then(res => {
      localStorage.setItem('authorization', res.data.token);
      dispatch(loginSuccess(res.data.user));
    }).catch(err => {
      dispatch(loginError([err]));
    });
  }
}

export function signUp(response, username) {
  return dispatch => {
  axios.post(api + '/users/signUp', {
      tokenId: response.tokenId,
      username: username
  }).then(res => {
    localStorage.setItem('authorization', res.data.token);
    dispatch(loginSuccess(response.email));
  }).catch(err => {
    dispatch(loginError([err]));
  });
 }
}

export function loginErr(response) {
  return dispatch => {
    dispatch(loginError(response));
  }
}

export function logoutRequest() {
  localStorage.removeItem('authorization');
  return {
    type: types.LOGOUT_REQUEST
  }
}

export function logoutSuccess() {
  return {
    type: types.LOGOUT_SUCCESS
  }
}

export function logoutFailure() {
  return {
    type: types.LOGOUT_FAILURE
  }
}

export function logout() {
  return dispatch => {
    dispatch(logoutRequest());
    localStorage.removeItem('authorization');
    dispatch(logoutSuccess());
  }
}
export function alreadyLoggedIn(user) {
  return {
    type: types.ALREADY_LOGGED_IN,
    user: user
  }
}
