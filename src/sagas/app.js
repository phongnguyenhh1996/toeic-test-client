import { takeLatest, put } from "redux-saga/effects";
import { API_UNAUTHORIZED } from "../constants/index";
import { push } from "connected-react-router"

export function* handleApiUnauthorized(action) {
    yield put(push("/login"))
}

export default function* apiUnauthorized() {
    yield takeLatest(API_UNAUTHORIZED, handleApiUnauthorized)
}
