import * as CONSTANT from "../constants";
import {getFirstQuestion, Test as ITest} from '../utils/function';
import produce from "immer"
import { set } from "lodash"

export interface IGroupQuestion {
  [key: string]: number[]
}

interface IInitialState {
  currentQuestion: number
  test: ITest,
  groupQuestion: IGroupQuestion
}

const initialState: IInitialState = {
  currentQuestion: 1,
  test: {} as ITest,
  groupQuestion: {}
}

const testsReducer = (state = initialState, action: any) =>
  produce(state, (draft: IInitialState) => {
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
      case CONSTANT.ADD_NEW_QUESTION_TO_GROUP:
        if (!action.data.groupQuestionId) {
          draft.groupQuestion[action.data.questionNumb] = [action.data.questionNumb, action.data.questionNumb + 1]
          draft.test.questions[action.data.questionNumb].questionGroupId = action.data.questionNumb
          draft.test.questions[action.data.questionNumb + 1].questionGroupId = action.data.questionNumb
        } else {
          const groupQuestion = draft.groupQuestion[action.data.groupQuestionId]
          const newQuestionNumb = action.data.groupQuestionId + groupQuestion.length
          draft.groupQuestion[action.data.groupQuestionId].push(newQuestionNumb)
          draft.test.questions[newQuestionNumb].questionGroupId = action.data.groupQuestionId
        }
        break
      case CONSTANT.REMOVE_QUESTION_FROM_GROUP:
        const groupQuestion = draft.groupQuestion[action.data.groupQuestionId]
        if (groupQuestion.length === 2) {
          delete draft.test.questions[action.data.groupQuestionId].questionGroupId
          delete draft.test.questions[action.data.groupQuestionId + 1].questionGroupId
          delete draft.groupQuestion[action.data.groupQuestionId]
        } else {
          delete draft.test.questions[action.data.groupQuestionId + groupQuestion.length - 1].questionGroupId
          draft.groupQuestion[action.data.groupQuestionId] = groupQuestion.filter(questionNumb => questionNumb !== (action.data.groupQuestionId + groupQuestion.length - 1))
        }
        break
      default:
        break
    }
  })

export default testsReducer;
