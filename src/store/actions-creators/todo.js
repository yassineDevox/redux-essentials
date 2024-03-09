import { ActionTypesTodo } from "../constants/actions-types";

export const getAllTodosRequest = _ => ({
    type: ActionTypesTodo.GET.START
})

export const getAllTodosFail = err => ({
    type: ActionTypesTodo.GET.FAIL,
    payload: err
})

export const getAllTodosSuccess = data => ({
    type: ActionTypesTodo.GET.SUCCESS,
    payload: data
})
