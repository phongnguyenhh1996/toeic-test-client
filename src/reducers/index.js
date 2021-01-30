import user from "./user";
import tests from "./tests";
import listTest from "./listTest";
import { combineReducers } from "redux";

export default combineReducers({
    user,
    tests,
    listTest
})