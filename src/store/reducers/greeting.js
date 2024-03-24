import { combineReducers } from "redux";
import { ActionTypesGreeting } from "../constants/actions-types";


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
        case ActionTypesGreeting.GET.START: {
            const query = {
                idle: false,
                loading: true
            }
            const a = {
                ...state,
                ...query
            }
            console.log('start =>', a);
            return a
        }

        case ActionTypesGreeting.GET.FAIL: {
            const query = {
                error: action.payload,
                loading: false
            }
            return {
                ...state,
                ...query
            }
        }

        case ActionTypesGreeting.GET.SUCCESS: {
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
