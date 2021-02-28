import { takeLatest, put, call } from "redux-saga/effects";
import * as listTestAPI from "../services/listTest";
import * as testAPI from "../services/tests";
import { listAllTestFailed, listAllTestSuccess } from "../actions/list_Test";
import * as testAction from "../actions/tests";
import { LIST_ALL_TEST_REQUEST, GET_TEST_DETAIL_REQUEST } from "../constants";
import { get } from "lodash";

const GET_LIST_TEST_SERVICE = {
    'all': listTestAPI.fetchListAllTest,
    'created': listTestAPI.fetchListCreatedTest,
    'completed': listTestAPI.fetchListAllTest
}

function* fetchListAllTest(action) {
    try {
        const dataListAllTest = yield call(GET_LIST_TEST_SERVICE[action.typeList], action.page);
        console.log(dataListAllTest);
        if (dataListAllTest.status === 200) {
            yield put(listAllTestSuccess(dataListAllTest.data, action.typeList));
        }
    } catch (e) {
        console.log(e);
        yield put(listAllTestFailed())
    }
}

function* fetchTestDetail(action) {
    const onSuccess = get(action, 'callbacks.onSuccess', () => {});
    const onFailure = get(action, 'callbacks.onFailure', () => {});
    try {
        const testDetail = yield call(testAPI.getDetailTest, action.data.testId);
        console.log(testDetail);
        if (testDetail.status === 200) {
            yield put(testAction.getDetailTestSuccess(testDetail.data));
            onSuccess()
        }
    } catch (e) {
        console.log(e);
        yield put(listAllTestFailed())
        onFailure()
    }
}

export default function* listAllTest() {
    yield takeLatest(LIST_ALL_TEST_REQUEST, fetchListAllTest)
    yield takeLatest(GET_TEST_DETAIL_REQUEST, fetchTestDetail)
}