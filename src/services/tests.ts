import API from "../utils/axios";
import { Test } from "../utils/function";

export const postTest = (test: Test) => API.post('/public/tests/create', test)
export const postAttemptTest = (id: string) => API.post(`/public/tests/${id}/attempt`)
export const getDetailTest = (id: string) => API.post(`/public/tests/${id}`)