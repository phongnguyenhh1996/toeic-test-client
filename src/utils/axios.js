import axios from 'axios'
import {API_URL, MASTER_KEY} from './apiUrl'
import store from '../store'
import { API_UNAUTHORIZED } from '../constants'

const instance = axios.create({
  baseURL: API_URL
})

instance.interceptors.request.use(config => {
  config.params = {
   // add your default ones
    access_token: MASTER_KEY,
   // spread the request's params
    ...config.params,
  };
  config.headers.Authorization = 'Bearer ' + localStorage.getItem('token')
  return config;
});

instance.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  if (error.response.status === 401) {
    store.dispatch({
      type: API_UNAUTHORIZED
    })
   }
  return Promise.reject(error);
});

export default instance;
