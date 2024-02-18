import { combineReducers } from "redux";
import StoreTypes from "../constants/store-types";
import counter from "./counter";

export default combineReducers({
    [StoreTypes.COUNTER]: counter
})
