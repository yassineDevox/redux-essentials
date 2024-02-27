import { ActionTypeCounter } from "../constants/actions-types"

export const incrementByOne = _ => ({
    type: ActionTypeCounter.BY_ONE.INCREMENT
})

export const decrementByOne = _ => ({
    type: ActionTypeCounter.BY_ONE.DECREMENT
})

export const getCounterApiStart = _ => ({
    type: ActionTypeCounter.BY_ONE.GET.START
})

export const getCounterApiSuccess = value => ({
    type: ActionTypeCounter.BY_ONE.GET.SUCCESS,
    payload: value
})

export const getCounterApiFail = err => ({
    type: ActionTypeCounter.BY_ONE.GET.FAIL,
    payload: err
})
