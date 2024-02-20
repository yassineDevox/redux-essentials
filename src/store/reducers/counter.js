import { combineReducers } from "redux"
import { ActionTypeCounter } from "../constants/actions-types"

const intialState = {
    byOne: { value: 0 },
}

const counterByOne = (state = intialState.byOne, action) => {
    switch (action.type) {
        case ActionTypeCounter.BY_ONE.INCREMENT: {
            return {
                value: state.value + 1
            }
        }
        case ActionTypeCounter.BY_ONE.DECREMENT: {
            return {
                value: state.value - 1
            }
        }
        default: return state
    }
}

export default combineReducers({
    byOne:counterByOne
})