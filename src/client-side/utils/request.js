import axios from 'axios';
//const baseUrl = 'http://localhost:5000/api';
const request = (method, url, params) => {
  const body = method === 'get' ? 'params' : 'data';
  let token = localStorage.getItem('authorization');

  const config = {
    method,
    url,
    headers: {
      'authorization': 'Bearer ' + token
    },
    [body]: params || {}
  }
  // console.log("Config", config);
  return axios.request(config);
}

export default request;
