import API from "../utils/axios";


export const fetchListAllTest = () => API.get('/public/tests/all')
export const fetchListCreatedTest = () => API.get('/public/tests/created')
