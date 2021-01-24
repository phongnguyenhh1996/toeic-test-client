import { all } from "redux-saga/effects";
import login from "./login";
import tests from "./tests";

export default function* rootSaga() {
  yield all([
    login(),
    tests()
  ])
}