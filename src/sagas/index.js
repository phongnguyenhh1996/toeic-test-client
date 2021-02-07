import { all } from "redux-saga/effects";
import login from "./login";
import tests from "./tests";
import register from "./register";
import listAllTest from "./listTest";
import app from "./app";

export default function* rootSaga() {
    yield all([
        app(),
        login(),
        register(),
        tests(),
        listAllTest()
    ])
}