import API from "../utils/axios";


export const fetchListAllTest = (page: number, testPart?: any) => API.get(`/public/tests/all?page=${page}${testPart ? '&testPart=' + testPart : ''}`)
export const fetchListCreatedTest = (page: number, testPart?: any) => API.get(`/public/tests/created?page=${page}${testPart ? '&testPart=' + testPart : ''}`)
export const fetchListTestHomepage = () => API.get('/public/tests/list-homepage')
