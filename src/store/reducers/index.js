import { combineReducers } from "redux";
import StoreTypes from "../constants/store-types";
import todoReducer from "./todo";
import userReducer from "./user";


export default combineReducers({
    [StoreTypes.TODO]: todoReducer,
    [StoreTypes.USER]: userReducer,
})
