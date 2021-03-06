import {
  ADD_NEW_QUESTION_TO_GROUP,
  CHANGE_ANSWER_DATA,
  CHANGE_CORRECTION_DATA,
  CHANGE_QUESTION_DATA,
  CHANGE_TEST_INFO,
  CREATE_TEST_FAILED,
  CREATE_TEST_REQUEST,
  CREATE_TEST_SUCCESS,
  GET_TEST_DETAIL_FAILED,
  GET_TEST_DETAIL_REQUEST,
  GET_TEST_DETAIL_SUCCESS,
  GO_TO_QUESTION, INIT_TEST, REMOVE_QUESTION_FROM_GROUP, POST_RESULT_REQUEST, POST_RESULT_FAILED, POST_RESULT_SUCCESS, IMPORT_PART_REQUEST, IMPORT_PART_FAILED, IMPORT_PART_SUCCESS
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

export const createTestRequest = (callbacks: any) => {
  return {
    type: CREATE_TEST_REQUEST,
    callbacks
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

export const getDetailTestRequest = (testId: string, callbacks: any) => {
  return {
    type: GET_TEST_DETAIL_REQUEST,
    data: {
      testId
    },
    callbacks
  }
}

export const getDetailTestSuccess = (test: Test) => {
  return {
    type: GET_TEST_DETAIL_SUCCESS,
    data: {
      test
    }
  }
}

export const getDetailTestFailed = () => {
  return {
    type: GET_TEST_DETAIL_FAILED
  }
}

export const postResultRequest = (callbacks: any) => {
  return {
    type: POST_RESULT_REQUEST,
    callbacks
  }
}

export const postResultSuccess = (data: any) => {
  return {
    type: POST_RESULT_SUCCESS,
    data
  }
}

export const postResultFailed = () => {
  return {
    type: POST_RESULT_FAILED
  }
}

export const importPartRequest = (testId: string, callbacks: any) => {
  return {
    type: IMPORT_PART_REQUEST,
    testId,
    callbacks
  }
}

export const importPartSuccess = (data: any) => {
  return {
    type: IMPORT_PART_SUCCESS,
    data
  }
}

export const importPartFailed = () => {
  return {
    type: IMPORT_PART_FAILED
  }
}
