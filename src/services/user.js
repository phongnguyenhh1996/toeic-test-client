import API from "../utils/axios";

export const userLogin = (data) => API.post('/login', data)
