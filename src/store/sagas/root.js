import { takeLatest } from "redux-saga/effects"
import { ActionTypesTodo } from "../constants/actions-types"
import { getAllTodosHandler } from "./handlers/todo"
export function* watcherSaga() {
    yield takeLatest(
        ActionTypesTodo.GET.START, getAllTodosHandler
    )
}