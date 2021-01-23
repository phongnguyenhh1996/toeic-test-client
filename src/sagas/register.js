import { takeLatest, put, call } from "redux-saga/effects";
import {get } from "lodash";
import * as userService from "../services/user";
import { USER_REGISTER_REQUEST } from "../constants/index";
import { userRegisterSuccess, userRegisterFailed, userLoginSuccess } from "../actions/user";

function* userRegister(action) {

    const onSuccess = get(action, 'callbacks.onSuccess', () => {});
    const onFailure = get(action, 'callbacks.onFailure', () => {});

    try {
        const res = yield call(userService.userRegister, action.data)

        const userRegistered = {
            username: action.data.username,
            password: action.data.password
        }
        const reslogin = yield call(userService.userLogin, userRegistered)
            // const token = get(res, 'data.accessToken')
        const token = get(reslogin, 'data.accessToken')
        if (token) {
            localStorage.setItem('token', token)
            yield put(userLoginSuccess(get(res, 'data')))
            onSuccess()
        }
        console.log(action.data);

        // const token = get(res, 'data.accessToken')
        // if (token) {
        //     localStorage.setItem('token', token)
        //     yield put(userRegisterSuccess(get(res, 'data')))
        //     onSuccess()
        // }
    } catch (err) {
        onFailure(err)
        yield put(userRegisterFailed())
    }

}

export default function* register() {
    yield takeLatest(USER_REGISTER_REQUEST, userRegister)
}