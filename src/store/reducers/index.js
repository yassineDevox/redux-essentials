import { combineReducers } from "redux";
import StoreTypes from "../constants/storetypes";
import counter from "./counter";

const f = combineReducers({
    [StoreTypes.COUNTER]: counter
})

export default f