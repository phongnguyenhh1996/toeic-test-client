import { takeLatest, put, call } from "redux-saga/effects";
import { USER_LOGIN_REQUEST } from "../constants/index";
import { get } from "lodash";
import * as userService from "../services/user";
import { userLoginSuccess, userLoginFailed } from "../actions";

function* userLogin(action) {
  try {
    const res = yield call(userService.userLogin, action.data)
    const token = get(res, 'data.accessToken')
    if (token) {
      localStorage.setItem('token', token)
      yield put(userLoginSuccess(get(res, 'data')))
      yield action.push('/dashboard')
    }
  } catch (err) {
    console.log(err);

    yield put(userLoginFailed())
  }

}

export default function* login() {
  yield takeLatest(USER_LOGIN_REQUEST, userLogin)
}
