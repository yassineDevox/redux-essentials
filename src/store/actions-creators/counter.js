import api from "../../utils/api/counter"
import { ActionTypeCommon, ActionTypeCounter } from "../constants/actions-types"

export const incrementByOne = _ => ({
    type: ActionTypeCounter.BY_ONE.INCREMENT
})

export const decrementByOne = _ => ({
    type: ActionTypeCounter.BY_ONE.DECREMENT
})

//--- API 
export const getCounterApiRequest = (payload, succesCallback, errorCallback) => ({
    type: ActionTypeCommon.COMMON_API_CALL,
    subType: ActionTypeCounter.BY_ONE.GET.START,
    promise: api.getCounterValue(payload),
    succesCallback,
    errorCallback
})
