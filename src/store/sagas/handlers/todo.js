import { call, put } from "redux-saga/effects";
import { getAllTodosRequest } from "../requests";
import { get } from "lodash";
import { getAllTodosFail, getAllTodosSuccess } from "../../actions-creators/todo";

export function* getAllTodosHandler(action) {
    try {
        const response = yield call(getAllTodosRequest)
        const data = get(response, 'data', {})
        yield put(getAllTodosSuccess(data))
    } catch (error) {
        yield put(getAllTodosFail(error))
    }
}