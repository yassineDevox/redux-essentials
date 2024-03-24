import { call, put, takeLatest } from "redux-saga/effects"
import { ActionTypesCommon } from "../constants/actions-types"
import { get } from "lodash"

function* handleApiCall(action) {
    const { subType, api } = action
    const startAction = () => ({ type: subType.START })

    yield put(startAction())

    try {
        const response = yield call(api)
        const data = get(response, 'data', {})
        const successAction = () => ({ type: subType.SUCCESS, payload: data })
        yield put(successAction())

    } catch (error) {
        console.log(error)
        const failAction = () => ({ type: subType.FAIL, payload: error })
        yield put(failAction())
    }
}

export function* watcherSaga() {
    yield takeLatest(ActionTypesCommon.API_CALL, handleApiCall)
}