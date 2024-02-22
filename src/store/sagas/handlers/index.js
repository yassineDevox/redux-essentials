import { call, put } from "redux-saga/effects";
import { requestGetCounter } from "../requests";
import { getCounterApiFail, getCounterApiSuccess } from "../../actions-creators/counter";
import { get } from "lodash";

//action here in case of getting something from the store
export function* handleGetCounter(action) {
    try {
        const response = yield call(requestGetCounter);
        const { data } = response
        const value = get(data,'value',0)
        yield put(getCounterApiSuccess(value))
    } catch (err) {
        put(getCounterApiFail(err))
    }
}