import { takeLatest, put, call } from "redux-saga/effects";
import { USER_LOGIN_REQUEST } from "../constants/index";
import { get } from "lodash";
import * as userService from "../services/user";
import { userLoginSuccess } from "../actions";

function* userLogin(action) {
  const res = yield call(userService.userLogin, action.data)
  const token = get(res, 'data.token')
  if (token) {
    localStorage.setItem('token', token)
    yield put(userLoginSuccess())
    yield action.push('/')
  } 
}

export default function* login(){
  yield takeLatest(USER_LOGIN_REQUEST, userLogin)
}