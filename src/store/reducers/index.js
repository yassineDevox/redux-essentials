import { combineReducers } from "redux";
import StoreTypes from "../constants/store-types";
import todoReducer from "./todo";
import userReducer from "./user";
import { connectRouter } from "connected-react-router";
import { history } from "..";


export default combineReducers({
    [StoreTypes.TODO]: todoReducer,
    [StoreTypes.USER]: userReducer,
    [StoreTypes.ROUTER]: connectRouter(history)
})
