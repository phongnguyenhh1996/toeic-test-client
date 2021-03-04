import { takeLatest, put, call } from "redux-saga/effects";
import * as userService from "../services/user";
import { USER_REGISTER_REQUEST } from "../constants/index";
import { userRegisterFailed } from "../actions/user";
import { userLogin } from "../actions/user";

function* userRegister(action) {
    try {
        yield call(userService.userRegister, action.data)
        const userRegistered = {
            username: action.data.username,
            password: action.data.password
        }
        yield put(userLogin(userRegistered, action.callbacks));

    } catch (err) {
        yield put(userRegisterFailed())
    }

}

export default function* register() {
    yield takeLatest(USER_REGISTER_REQUEST, userRegister)
}
