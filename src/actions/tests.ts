import {
  ADD_NEW_QUESTION_TO_GROUP,
  CHANGE_ANSWER_DATA,
  CHANGE_CORRECTION_DATA,
  CHANGE_QUESTION_DATA,
  CHANGE_TEST_INFO,
  CREATE_TEST_FAILED,
  CREATE_TEST_REQUEST,
  CREATE_TEST_SUCCESS,
  GO_TO_QUESTION, INIT_TEST, REMOVE_QUESTION_FROM_GROUP
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

export const addNewQuestionToGroup = (questionNumb: number, groupQuestionId?: number) => {
  return {
    type: ADD_NEW_QUESTION_TO_GROUP,
    data: {
      questionNumb: questionNumb,
      groupQuestionId
    }
  }
}

export const removeQuestionFromGroup = (groupQuestionId: number) => {
  return {
    type: REMOVE_QUESTION_FROM_GROUP,
    data: {
      groupQuestionId
    }
  }
}

export const createTestRequest = () => {
  return {
    type: CREATE_TEST_REQUEST
  }
}

export const createTestSuccess = () => {
  return {
    type: CREATE_TEST_SUCCESS
  }
}

export const createTestFailed = () => {
  return {
    type: CREATE_TEST_FAILED
  }
}