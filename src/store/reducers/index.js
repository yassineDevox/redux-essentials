import { combineReducers } from "redux";
import StoreTypes from "../constants/store-types";
import todoReducer from "./todo";
import userReducer from "./user";
import greetingReducer from "./greeting";

import { connectRouter } from "connected-react-router";

const appReducers = history => combineReducers({
    [StoreTypes.TODO]: todoReducer,
    [StoreTypes.USER]: userReducer,
    [StoreTypes.GREETING]:greetingReducer,
    [StoreTypes.ROUTER]: connectRouter(history)
})

export default appReducers

