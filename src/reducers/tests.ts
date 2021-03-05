import * as CONSTANT from "../constants";
import {getFirstQuestion, Question, Test as ITest} from '../utils/function';
import produce from "immer"
import { set, isEmpty } from "lodash"

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
        draft.currentQuestion = action.toQuestion;
        break;
      case CONSTANT.INIT_TEST:
        if (isEmpty(action.test)) {
          draft.test = {} as ITest
          draft.currentQuestion = 1
          draft.groupQuestion = {}
        } else {
          draft.test = action.test;
          draft.currentQuestion = getFirstQuestion(
            action.test.testType,
            action.test.testPart
          );
        }
        break;
      case CONSTANT.GET_TEST_DETAIL_SUCCESS:
        const test = action.data.test.data
        const newGroupQuestion: any = {}
        Object.values(test.questions).forEach((question: any) => {
          if (question.questionGroupId) {
            if (newGroupQuestion[question.questionGroupId]) {
              newGroupQuestion[question.questionGroupId].push(
                question.questionNumb
              )
            } else {
              newGroupQuestion[question.questionGroupId] = [
                question.questionNumb,
              ]
            }
          }
        });
        draft.test = test
        draft.currentQuestion = getFirstQuestion(test.testType, test.testPart)
        draft.groupQuestion = newGroupQuestion
        break;
      case CONSTANT.CHANGE_TEST_INFO:
        draft.test[action.data.key] = action.data.data;
        break;
      case CONSTANT.CHANGE_QUESTION_DATA:
        draft.test.questions[action.data.questionNumb][action.data.key] =
          action.data.data;
        break;
      case CONSTANT.CHANGE_ANSWER_DATA:
        draft.test.answers[action.data.questionNumb][
          action.data.answerNumb
        ].answer = action.data.data;
        break;
      case CONSTANT.CHANGE_CORRECTION_DATA:
        set(
          draft.test.correctAnswer,
          `${action.data.questionNumb}.${action.data.key}`,
          action.data.data
        );
        break;
      case CONSTANT.ADD_NEW_QUESTION_TO_GROUP:
        if (!action.data.groupQuestionId) {
          draft.groupQuestion[action.data.questionNumb] = [
            action.data.questionNumb,
            action.data.questionNumb + 1,
          ];

          const nextQuestionData = draft.test.questions[
            action.data.questionNumb + 1
          ] as Question;
          draft.test.questions[action.data.questionNumb].questionGroupId =
            action.data.questionNumb;
          nextQuestionData.questionGroupId = action.data.questionNumb;
          nextQuestionData.audioSrc = null;
          nextQuestionData.imageSrc = null;
          draft.currentQuestion = action.data.questionNumb + 1;
        } else {
          const groupQuestion =
            draft.groupQuestion[action.data.groupQuestionId];
          const newQuestionNumb =
            action.data.groupQuestionId + groupQuestion.length;
          const newQuestion = draft.test.questions[newQuestionNumb] as Question;

          draft.groupQuestion[action.data.groupQuestionId].push(
            newQuestionNumb
          );
          newQuestion.questionGroupId = action.data.groupQuestionId;
          newQuestion.audioSrc = null;
          newQuestion.imageSrc = null;
          draft.currentQuestion = newQuestionNumb;
        }
        break;
      case CONSTANT.REMOVE_QUESTION_FROM_GROUP:
        const groupQuestion = draft.groupQuestion[action.data.groupQuestionId];
        if (groupQuestion.length === 2) {
          draft.currentQuestion = action.data.groupQuestionId;

          delete draft.test.questions[action.data.groupQuestionId]
            .questionGroupId;
          delete draft.test.questions[action.data.groupQuestionId + 1]
            .questionGroupId;
          delete draft.groupQuestion[action.data.groupQuestionId];
        } else {
          delete draft.test.questions[
            action.data.groupQuestionId + groupQuestion.length - 1
          ].questionGroupId;

          draft.currentQuestion =
            action.data.groupQuestionId + groupQuestion.length - 2;
          draft.groupQuestion[
            action.data.groupQuestionId
          ] = groupQuestion.filter(
            (questionNumb) =>
              questionNumb !==
              action.data.groupQuestionId + groupQuestion.length - 1
          );
        }
        break;
      case CONSTANT.IMPORT_PART_SUCCESS:
        const partTest = action.data.data as ITest
        const partTestGroupQuestion: any = {}
        Object.values(partTest.questions).forEach((question: any) => {
          if (question.questionGroupId) {
            if (partTestGroupQuestion[question.questionGroupId]) {
              partTestGroupQuestion[question.questionGroupId].push(
                question.questionNumb
              )
            } else {
              partTestGroupQuestion[question.questionGroupId] = [
                question.questionNumb,
              ]
            }
          }
        });
        draft.test = {
          ...draft.test,
          questions: { ...draft.test.questions, ...partTest.questions},
          answers: { ...draft.test.answers, ...partTest.answers},
          correctAnswer: { ...draft.test.correctAnswer, ...partTest.correctAnswer}
        }
        draft.currentQuestion = getFirstQuestion(partTest.testType, partTest.testPart)
        draft.groupQuestion = {...draft.groupQuestion, ...partTestGroupQuestion}
        break
      default:
        break;
    }
  })

export default testsReducer;
