import {
  LIST_ALL_TEST_SUCCESS,
  LIST_ALL_TEST_REQUEST,
  LIST_ALL_TEST_FAILED,
} from "../constants";
import { Test } from "../utils/function";

export const listTestRequest = (typeList: string, page: number) => {
  return {
    type: LIST_ALL_TEST_REQUEST,
    typeList,
    page
  };
};

export const listAllTestSuccess = (arrayList: Test[], typeList: string) => {
  return {
    type: LIST_ALL_TEST_SUCCESS,
    payload: arrayList,
    typeList
  };
};

export const listAllTestFailed = () => {
  return {
    type: LIST_ALL_TEST_FAILED,
  };
};
