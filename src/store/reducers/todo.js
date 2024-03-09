import { combineReducers } from "redux";
import { ActionTypesTodo } from "../constants/actions-types";


const initialState = {
    get: {
        idle: true,//state machine
        data: {},
        error: null,
        loading: false,
    }
}

const get = (state = initialState.get, action) => {
    switch (action.type) {
        case ActionTypesTodo.GET.START: {
            const query = {
                idle: false,
                loading: true
            }
            return {
                ...state,
                ...query
            }
        }

        case ActionTypesTodo.GET.FAIL: {
            const query = {
                error: action.payload,
                loading: false
            }
            return {
                ...state,
                ...query
            }
        }

        case ActionTypesTodo.GET.SUCCESS: {
            const query = {
                data: action.payload,
                error: null,
                loading: false
            }
            return {
                ...state,
                ...query
            }
        }

        default: return state
    }
}


export default combineReducers({
    get
})
