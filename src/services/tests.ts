import API from "../utils/axios";
import { Test } from "../utils/function";

export const postTest = (test: Test) => API.post('/public/tests/create', test)
