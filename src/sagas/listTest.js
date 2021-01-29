import { takeLatest, put, call } from "redux-saga/effects";
import * as listTest from "../services/listTest";
import { listAllTestFailed, listAllTestSuccess } from "../actions/list_Test";
import { LIST_ALL_TEST_REQUEST } from "../constants";

function* fetchListAllTest() {
    try {
        const dataListAllTest = yield call(listTest.fetchListAllTest);
        console.log(dataListAllTest);
        if (dataListAllTest.status === 200) {
            yield put(listAllTestSuccess(dataListAllTest.data.tests));
        }
    } catch (e) {
        console.log(e);
        yield put(listAllTestFailed())
    }
}

export default function* listAllTest() {
    yield takeLatest(LIST_ALL_TEST_REQUEST, fetchListAllTest)
}