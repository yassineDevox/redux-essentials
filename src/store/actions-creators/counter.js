import { ActionTypeCounter } from "../constants/actions-types"

export const incrementByOne = _ => ({
    type: ActionTypeCounter.BY_ONE.INCREMENT
})


export const decrementByOne = _ => ({
    type: ActionTypeCounter.BY_ONE.DECREMENT
})