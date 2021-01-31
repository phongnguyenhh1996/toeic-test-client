import API from "../utils/axios";


export const fetchListAllTest = (page: number) => API.get(`/public/tests/all?page=${page}`)
export const fetchListCreatedTest = (page: number) => API.get(`/public/tests/created?page=${page}`)
