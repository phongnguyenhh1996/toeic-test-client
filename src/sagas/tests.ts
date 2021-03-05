import { createDraft, finishDraft } from "immer";
import { takeLatest, select, call, put } from "redux-saga/effects";
import {
  CREATE_TEST_REQUEST,
  POST_RESULT_REQUEST,
  IMPORT_PART_REQUEST,
} from "../constants/index";
import { postTest, postResult, getDetailTest } from "../services/tests";
import uploadFile from "../services/uploadFile";
import { Question, Test } from "../utils/function";
import { uploadProgress, itemUploadDone } from "../actions/app";
import { importPartSuccess, importPartFailed } from "../actions/tests";
import { isString } from "lodash";

function* createTest(action: any) {
  const test = yield select((state) => state.tests.test);

  const testDraft = createDraft(test) as Test;

  let avatarUrl = "";
  if (testDraft.avatarSrc) {
    avatarUrl = yield call(uploadFile, testDraft.avatarSrc);
  }
  testDraft.avatarSrc = avatarUrl;

  const questions = testDraft.questions as { [key: string]: Question };
  const questionsKey = Object.keys(questions);

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
    const res = yield call(postTest, newTest);
    if (res.status === 200) {
      action.callbacks.onSuccess();
    }
  } catch (error) {}
}

function* handlePostResult(action: any) {
  const testResult = yield select((state) => state?.tests?.test?.correctAnswer);
  const testId = yield select((state) => state?.tests?.test?.id);
  try {
    const res = yield call(postResult, testId, testResult);
    if (res.status === 200) {
      console.log(res);
    }
  } catch (err) {}
}

function* handleImportTest(action: any) {
  try {
    const testDetail = yield call(getDetailTest, action.testId, true);
    if (testDetail.status === 200) {
      yield put(importPartSuccess(testDetail.data));
    }
  } catch (e) {
    console.log(e);
    
    yield put(importPartFailed());
  }
}

export default function* tests() {
  yield takeLatest(CREATE_TEST_REQUEST, createTest);
  yield takeLatest(POST_RESULT_REQUEST, handlePostResult);
  yield takeLatest(IMPORT_PART_REQUEST, handleImportTest);
}
