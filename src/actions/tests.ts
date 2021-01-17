import {
  GO_TO_QUESTION, INIT_TEST
} from "../constants";
import { Test } from "../utils/function";

export const initTest = (test: Test) => {
  return {
    type: INIT_TEST,
    test
  }
}

export const goToQuestion = (questionNum: number) => {
  return {
    type: GO_TO_QUESTION,
    toQuestion: questionNum
  }
}
