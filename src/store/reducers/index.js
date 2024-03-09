import { combineReducers } from "redux";
import StoreTypes from "../constants/store-types";
import todoReducer from "./todo";


export default combineReducers({
    [StoreTypes.TODO]: todoReducer
})
