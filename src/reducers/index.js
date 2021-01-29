import user from "./user";
import tests from "./tests";
import listAllTestReducer from "./list_test";
import { combineReducers } from "redux";

export default combineReducers({
    user,
    tests,
    listAllTestReducer
})