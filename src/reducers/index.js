import user from "./user";
import tests from "./tests";
import listTest from "./listTest";
import app from "./app";
import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    app,
    user,
    tests,
    listTest
})

export default createRootReducer
