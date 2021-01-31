import { takeLatest, put, call } from "redux-saga/effects";
import * as listTest from "../services/listTest";
import { listAllTestFailed, listAllTestSuccess } from "../actions/list_Test";
import { LIST_ALL_TEST_REQUEST } from "../constants";

const GET_LIST_TEST_SERVICE = {
    'all': listTest.fetchListAllTest,
    'created': listTest.fetchListCreatedTest,
    'completed': listTest.fetchListAllTest
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

export default function* listAllTest() {
    yield takeLatest(LIST_ALL_TEST_REQUEST, fetchListAllTest)
}