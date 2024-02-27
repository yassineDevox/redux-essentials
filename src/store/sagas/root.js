import { takeLatest } from "redux-saga/effects"
import { ActionTypeCounter } from "../constants/actions-types"
import { handleGetCounter } from "./handlers"

export function* watcherSaga() {
    yield takeLatest(
        ActionTypeCounter.BY_ONE.GET.START,
        handleGetCounter
    )
}