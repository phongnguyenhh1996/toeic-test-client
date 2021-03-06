import API from "../utils/axios";
import { Test } from "../utils/function";

export const postTest = (test: Test) => API.post('/public/tests/create', test)
export const postAttemptTest = (id: string) => API.post(`/public/tests/${id}/attempt`)
export const getDetailTest = (id: string, result = false) => API.get(`/public/tests/${id}?result=${result}`)
export const postResult = (id: string, result: any) => API.post(`/public/tests/mark/${id}`, result)
