import user from "./user";
import tests from "./tests";
import listTest from "./listTest";
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    user,
    tests,
    listTest
})

export default createRootReducer