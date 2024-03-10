import { combineReducers } from "redux";
import { ActionTypesUser } from "../constants/actions-types";


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
        case ActionTypesUser.GET.START: {
            const query = {
                idle: false,
                loading: true
            }
            return {
                ...state,
                ...query
            }
        }

        case ActionTypesUser.GET.FAIL: {
            console.log('action=>', action)
            const query = {
                error: action.payload,
                loading: false
            }
            return {
                ...state,
                ...query
            }
        }

        case ActionTypesUser.GET.SUCCESS: {
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
