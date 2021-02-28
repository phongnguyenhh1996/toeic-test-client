import { createDraft, finishDraft } from "immer";
import { takeLatest, select, call } from "redux-saga/effects";
import { CREATE_TEST_REQUEST } from "../constants/index";
import { postTest } from "../services/tests";
import uploadFile from "../services/uploadFile";
import { Question, Test } from "../utils/function";

function* createTest(action: any) {
  const test = yield select(state => state.tests.test)

  const testDraft = createDraft(test) as Test
  
  let avatarUrl = ''
  if (testDraft.avatarSrc) {
    avatarUrl = yield call(uploadFile, testDraft.avatarSrc)
  }
  testDraft.avatarSrc = avatarUrl

  const questions = testDraft.questions as {[key: string]: Question}
  const questionsKey = Object.keys(questions)

  for (let key = parseInt(questionsKey[0]); key <= parseInt(questionsKey[questionsKey.length]); key++) {
    let imageUrl = ''
    let audioUrl = ''

    if (questions[key]) {
      if (questions[key].imageSrc) {
        imageUrl = yield call(uploadFile, questions[key]?.imageSrc)
      }
  
      if (questions[key].audioSrc) {
        audioUrl = yield call(uploadFile, questions[key]?.audioSrc)
      }
  
      questions[key].imageSrc = imageUrl
      questions[key].audioSrc = audioUrl
    }
  }

  const newTest = finishDraft(testDraft)
  console.log(newTest);
  try {
    const res = yield call(postTest, newTest)
    action.callbacks.onSuccess();
    console.log(res);
  } catch (error) {
    
  }
}

export default function* tests() {
  yield takeLatest(CREATE_TEST_REQUEST, createTest)
}
