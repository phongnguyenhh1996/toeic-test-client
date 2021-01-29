import API from "../utils/axios";


export const fetchListAllTest = () => API.get('/public/tests/all')
