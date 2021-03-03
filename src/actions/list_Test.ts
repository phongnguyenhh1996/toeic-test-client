import {
  LIST_ALL_TEST_SUCCESS,
  LIST_ALL_TEST_REQUEST,
  LIST_ALL_TEST_FAILED,
  GET_LIST_TEST_HOMEPAGE_REQUEST,
  GET_LIST_TEST_HOMEPAGE_SUCCESS,
  GET_LIST_TEST_HOMEPAGE_FAILED,
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

export const listTestHomepageRequest = (callbacks: any) => {
  return {
    type: GET_LIST_TEST_HOMEPAGE_REQUEST,
    callbacks
  }
}

export const listTestHomepageSuccess = (data: any) => {
  return {
    type: GET_LIST_TEST_HOMEPAGE_SUCCESS,
    data
  }
}

export const listTestHomepageFailed = (errors: any) => {
  return {
    type: GET_LIST_TEST_HOMEPAGE_FAILED,
    errors
  }
}
