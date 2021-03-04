import { takeLatest, put, call } from "redux-saga/effects";
import * as listTestAPI from "../services/listTest";
import * as testAPI from "../services/tests";
import { listAllTestFailed, listAllTestSuccess, listTestHomepageSuccess, listTestHomepageFailed } from "../actions/list_Test";
import * as testAction from "../actions/tests";
import { LIST_ALL_TEST_REQUEST, GET_TEST_DETAIL_REQUEST, GET_LIST_TEST_HOMEPAGE_REQUEST } from "../constants";
import { get } from "lodash";

const GET_LIST_TEST_SERVICE = {
    'all': listTestAPI.fetchListAllTest,
    'created': listTestAPI.fetchListCreatedTest,
    'completed': listTestAPI.fetchListAllTest
}

function* fetchListAllTest(action) {
    try {
        const dataListAllTest = yield call(GET_LIST_TEST_SERVICE[action.typeList], action.page);
        if (dataListAllTest.status === 200) {
            yield put(listAllTestSuccess(dataListAllTest.data, action.typeList));
        }
    } catch (e) {
        yield put(listAllTestFailed())
    }
}

function* fetchTestDetail(action) {
    const onSuccess = get(action, 'callbacks.onSuccess', () => {});
    const onFailure = get(action, 'callbacks.onFailure', () => {});
    try {
        const testDetail = yield call(testAPI.getDetailTest, action.data.testId);
        if (testDetail.status === 200) {
            yield put(testAction.getDetailTestSuccess(testDetail.data));
            onSuccess()
        }
    } catch (e) {
        yield put(listAllTestFailed())
        onFailure()
    }
}

function* handlefetchListTestHomePage(action) {
  const onSuccess = get(action, 'callbacks.onSuccess', () => {});
  const onFailure = get(action, 'callbacks.onFailure', () => {});

  try {
    const listTest = yield call(listTestAPI.fetchListTestHomepage);
    if (listTest.status === 200) {
      yield put(listTestHomepageSuccess(listTest.data))
      onSuccess()
    }
  } catch (e) {
    yield put(listTestHomepageFailed(e))
    onFailure()
  }
}

export default function* listAllTest() {
    yield takeLatest(LIST_ALL_TEST_REQUEST, fetchListAllTest)
    yield takeLatest(GET_TEST_DETAIL_REQUEST, fetchTestDetail)
    yield takeLatest(GET_LIST_TEST_HOMEPAGE_REQUEST, handlefetchListTestHomePage)
}
