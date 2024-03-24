import { combineReducers } from "redux";
import { ActionTypesAuth } from "../constants/actions-types";

const initialState = {
    login: {
        idle: true,//state machine
        data: {},
        error: null,
        loading: false,
    }
}

const login = (state = initialState.login, action) => {
    switch (action.type) {
        case ActionTypesAuth.LOGIN.START: {
            const query = {
                idle: false,
                loading: true
            }
            return {
                ...state,
                ...query
            }
        }

        case ActionTypesAuth.LOGIN.FAIL: {
            const query = {
                error: action.payload,
                loading: false
            }
            return {
                ...state,
                ...query
            }
        }

        case ActionTypesAuth.LOGIN.SUCCESS: {
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
    login
})
