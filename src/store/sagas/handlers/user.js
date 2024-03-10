import { call, put } from "redux-saga/effects";
import { getAllUsersRequest } from "../requests";
import { get } from "lodash";
import { getAllUsersFail, getAllUsersSuccess } from "../../actions-creators/user";

export function* getAllUsersHandler(action) {
    try {
        const response = yield call(getAllUsersRequest)
        const data = get(response, 'data', {})
        yield put(getAllUsersSuccess(data))
    } catch (error) {
        yield put(getAllUsersFail(error))
    }
}