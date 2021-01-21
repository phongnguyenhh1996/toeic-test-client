import * as CONSTANT from "../constants";
import {getFirstQuestion} from '../utils/function';
import produce from "immer"
import { set } from "lodash"

const initialState = {
  currentQuestion: 1,
  test: {}
}

const testsReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case CONSTANT.GO_TO_QUESTION:
        draft.currentQuestion = action.toQuestion
        break
      case CONSTANT.INIT_TEST:
        draft.test = action.test
        draft.currentQuestion = getFirstQuestion(action.test.testType, action.test.testPart)
        break
      case CONSTANT.CHANGE_TEST_INFO:
        draft.test[action.data.key] = action.data.data
        break
      case CONSTANT.CHANGE_QUESTION_DATA:
        draft.test.questions[action.data.questionNumb][action.data.key] = action.data.data
        break
      case CONSTANT.CHANGE_ANSWER_DATA:
        draft.test.answers[action.data.questionNumb][action.data.answerNumb].answer = action.data.data
        break
      case CONSTANT.CHANGE_CORRECTION_DATA:
         set(draft.test.correctAnswer, `${action.data.questionNumb}.${action.data.key}`, action.data.data)
         break
      default:
        break
    }
  })

export default testsReducer;
