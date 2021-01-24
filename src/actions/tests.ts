import {
  CHANGE_ANSWER_DATA,
  CHANGE_CORRECTION_DATA,
  CHANGE_QUESTION_DATA,
  CHANGE_TEST_INFO,
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

export const changeTestInfo = (data: any, key: 'name' | 'description' | 'avatarSrc') => {
  return {
    type: CHANGE_TEST_INFO,
    data: {
      data,
      key
    }
  }
}

export const changeQuestionData = (data: any, key: string, questionNumb: number) => {
  return {
    type: CHANGE_QUESTION_DATA,
    data: {
      data,
      key,
      questionNumb
    }
  }
}

export const changeAnswerData = (data: any, answerNumb: number, questionNumb: number) => {
  return {
    type: CHANGE_ANSWER_DATA,
    data: {
      data,
      answerNumb, 
      questionNumb
    }
  }
}

export const changeCorrectAnswerData = (data: any, key: string, questionNumb: number) => {
  return {
    type: CHANGE_CORRECTION_DATA,
    data: {
      data,
      key,
      questionNumb
    }
  }
}