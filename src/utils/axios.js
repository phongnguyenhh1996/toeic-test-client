import axios from 'axios'
import {API_URL, MASTER_KEY} from './apiUrl'

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
  return config;
});

export default instance; 