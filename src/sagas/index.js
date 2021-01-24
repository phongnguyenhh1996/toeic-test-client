import { all } from "redux-saga/effects";
import login from "./login";
import tests from "./tests";
import register from "./register";

export default function* rootSaga() {
    yield all([
        login(),
        register(),
        tests(),
    ])
}