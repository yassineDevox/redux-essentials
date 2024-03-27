import { call, put, race, take, takeLatest } from "redux-saga/effects"
import { ActionTypesCommon } from "../constants/actions-types"
import { get } from "lodash"

function* handleApiCalls(action) {
    const { subType, api } = action
    const startAction = () => ({ type: subType.START })

    yield put(startAction())

    try {
        const response = yield call(api)
        const data = get(response, 'data', {})
        const successAction = () => ({ type: subType.SUCCESS, payload: data })
        yield put(successAction())

    } catch (error) {
        const failAction = () => ({ type: subType.FAIL, payload: error })
        yield put(failAction())
    }
}

function* handleCallBacks(action) {
    const {
        subType: { START, SUCCESS, FAIL },
        successCallBack,
        errorCallBack
    } = action

    yield take(START)

    const { success, error } = yield race({
        success: take(SUCCESS),
        error: take(FAIL)
    })

    if (success && successCallBack) {
        const payload = get(success, 'payload', {})
        successCallBack(payload)
    }

    if (error && errorCallBack) {
        errorCallBack(error)
    }
}

export function* watcherSaga() {
    yield takeLatest(ActionTypesCommon.API_CALL, handleApiCalls)
    yield takeLatest(ActionTypesCommon.API_CALL, handleCallBacks)
}