import { createDraft, finishDraft } from "immer";
import { takeLatest, select, call, put } from "redux-saga/effects";
import {
  CREATE_TEST_REQUEST,
  POST_RESULT_REQUEST,
  IMPORT_PART_REQUEST,
} from "../constants/index";
import { postTest, postResult, getDetailTest } from "../services/tests";
import uploadFile from "../services/uploadFile";
import { CorrectAnswer, Test, getPartInfoFromQuestion } from "../utils/function";
import { uploadProgress, itemUploadDone } from "../actions/app";
import { importPartSuccess, importPartFailed, postResultSuccess } from "../actions/tests";
import { get, isString } from "lodash";
import { AxiosResponse } from "axios";

function* createTest(action: any) {
  const test: Test = yield select((state) => state.tests.test);

  const testDraft = createDraft(test);
  if (!test.name) {
    return action.callbacks.onFailure("Test name is required!");
  }

  let avatarUrl = "";
  if (testDraft.avatarSrc) {
    avatarUrl = yield call(uploadFile, testDraft.avatarSrc);
  }
  testDraft.avatarSrc = avatarUrl;

  const questions = testDraft.questions;
  const answers = testDraft.answers;
  const correctAnswer = testDraft.correctAnswer;
  const questionsKey = Object.keys(questions);

  const invalidQuestion = Object.values(questions).findIndex(question => {
    const partInfo = getPartInfoFromQuestion(question.questionNumb)
    const isInvalidQuestion = !partInfo.isDisableQuestion && !question.question
    const isInvalidAnswer = !partInfo.isDisableQuestion && answers[question.questionNumb]?.some(answer => !answer.answer)
    const isInvalidCorrectAnswer = !correctAnswer[question.questionNumb]

    return (isInvalidQuestion || isInvalidAnswer || isInvalidCorrectAnswer)
  })

  if (invalidQuestion !== -1) {
    return action.callbacks.onFailure("Please fill all required information!", parseInt(questionsKey[invalidQuestion]));
  }

  let totalFile = 0;
  Object.values(questions).forEach((question) => {
    if (question.imageSrc instanceof File) {
      totalFile += 1;
    }
    if (question.audioSrc instanceof File) {
      totalFile += 1;
    }
  });

  yield put(uploadProgress({ total: totalFile }));

  for (
    let key = parseInt(questionsKey[0]);
    key <= parseInt(questionsKey[questionsKey.length - 1]);
    key++
  ) {
    let imageUrl = "";
    let audioUrl = "";

    if (questions[key]) {
      if (questions[key].imageSrc instanceof File) {
        imageUrl = yield call(uploadFile, questions[key]?.imageSrc);
        yield put(itemUploadDone());
      } else if (isString(questions[key].imageSrc)) {
        imageUrl = questions[key].imageSrc
      }

      if (questions[key].audioSrc instanceof File) {
        audioUrl = yield call(uploadFile, questions[key]?.audioSrc);
        yield put(itemUploadDone());
      } else if (isString(questions[key].audioSrc)) {
        audioUrl = questions[key].audioSrc
      }

      questions[key].imageSrc = imageUrl;
      questions[key].audioSrc = audioUrl;
    }
  }

  const newTest = finishDraft(testDraft);
  try {
    const res: AxiosResponse = yield call(postTest, newTest);
    if (res.status === 200) {
      action.callbacks.onSuccess();
    }
  } catch (error) {}
}

function* handlePostResult(action: any) {
  const onSuccess = get(action, 'callbacks.onSuccess');
  const onFailure = get(action, 'callbacks.onFailure');
  const testResult: CorrectAnswer = yield select((state) => state?.tests?.test?.correctAnswer);
  const testId: string = yield select((state) => state?.tests?.test?.id);
  try {
    const res: AxiosResponse = yield call(postResult, testId, testResult);
    if (res.status === 200) {
      onSuccess()
      yield put(postResultSuccess(res.data))
    }
  } catch (err) {
    onFailure()
  }
}

function* handleImportTest(action: any) {

  const onSuccess = get(action, 'callbacks.onSuccess');
  const onFailure = get(action, 'callbacks.onFailure');

  try {
    const testDetail: AxiosResponse = yield call(getDetailTest, action.testId, true);
    if (testDetail.status === 200) {
      yield put(importPartSuccess(testDetail.data));
      onSuccess()
    }
  } catch (e) {
    console.log(e);
    onFailure()
    yield put(importPartFailed());
  }
}

export default function* tests() {
  yield takeLatest(CREATE_TEST_REQUEST, createTest);
  yield takeLatest(POST_RESULT_REQUEST, handlePostResult);
  yield takeLatest(IMPORT_PART_REQUEST, handleImportTest);
}
