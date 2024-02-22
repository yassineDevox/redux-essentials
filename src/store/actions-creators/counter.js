import { ActionTypeCounter } from "../constants/actions-types"

export const incrementByOne = _ => ({
    type: ActionTypeCounter.BY_ONE.INCREMENT
})

export const decrementByOne = _ => ({
    type: ActionTypeCounter.BY_ONE.DECREMENT
})

export const getCounterApiStart = _=>({
    type:ActionTypeCounter.BY_ONE.API.GET.START
})

export const getCounterApiSuccess = payload =>({
    type:ActionTypeCounter.BY_ONE.API.GET.SUCCESS,
    payload
})

export const getCounterApiFail = _=>({
    type:ActionTypeCounter.BY_ONE.API.GET.FAIL
})
