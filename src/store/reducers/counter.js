import { combineReducers } from "redux"
import { ActionTypeCounter } from "../constants/actions-types"

const intialState = {
    byOne: {
        value: 0,
        loading: false,
        error: null
    },
}

const counterByOne = (state = intialState.byOne, action) => {
    switch (action.type) {
        case ActionTypeCounter.BY_ONE.INCREMENT: {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case ActionTypeCounter.BY_ONE.DECREMENT: {
            return {
                ...state,
                value: state.value - 1
            }
        }
        case ActionTypeCounter.BY_ONE.SET: {
            return {
                ...state,
                value: action.payload
            }
        }
        case ActionTypeCounter.BY_ONE.API.GET.START: {
            return {
                ...state,
                loading: true
            }
        }
        case ActionTypeCounter.BY_ONE.API.GET.FAIL: {
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        case ActionTypeCounter.BY_ONE.API.GET.SUCCESS: {
            return {
                loading: false,
                error:null,
                value: action.payload
            }
        }
        default: return state
    }
}

export default combineReducers({
    byOne: counterByOne
})