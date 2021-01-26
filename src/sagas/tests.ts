import { createDraft, finishDraft } from "immer";
import { takeLatest, select, call } from "redux-saga/effects";
import { CREATE_TEST_REQUEST } from "../constants/index";
import { postTest } from "../services/tests";
import uploadFile from "../services/uploadFile";
import { Test } from "../utils/function";

function* createTest(action: any) {
  const test = yield select(state => state.tests.test)

  const testDraft = createDraft(test) as Test
  
  let avatarUrl = ''
  if (testDraft.avatarSrc) {
    avatarUrl = yield call(uploadFile, testDraft.avatarSrc)
  }
  testDraft.avatarSrc = avatarUrl

  const questions = testDraft.questions
  const questionsKey = Object.keys(questions)

  for (let key = 1; key <= questionsKey.length; key++) {
    let imageUrl = ''
    let audioUrl = ''

    if (questions[key].imageSrc) {
      imageUrl = yield call(uploadFile, questions[key].imageSrc)
    }

    if (questions[key].audioSrc) {
      audioUrl = yield call(uploadFile, questions[key].audioSrc)
    }

    questions[key].imageSrc = imageUrl
    questions[key].audioSrc = audioUrl
  }

  const newTest = finishDraft(testDraft)
  console.log(newTest);
  try {
    const res = yield call(postTest, newTest)
    console.log(res);
  } catch (error) {
    
  }
}

export default function* tests() {
  yield takeLatest(CREATE_TEST_REQUEST, createTest)
}