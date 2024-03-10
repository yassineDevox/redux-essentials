import { takeLatest } from "redux-saga/effects"
import { ActionTypesTodo, ActionTypesUser } from "../constants/actions-types"
import { getAllTodosHandler, getAllUsersHandler } from "./handlers"


export function* watcherSaga() {
    yield takeLatest(
        ActionTypesTodo.GET.START, getAllTodosHandler,
        ActionTypesUser.GET.START, getAllUsersHandler,
    )
}