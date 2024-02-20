import { combineReducers } from "redux";
import counter from "./counter";
import StoreTypes from "../constants/store-types";

export default combineReducers({
    [StoreTypes.COUNTER]: counter
})
