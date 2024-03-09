import { ActionTypesTodo } from "../constants/actions-types";

const getAllTodosRequest = _ => ({
    type: ActionTypesTodo.GET.START
})

const getAllTodosFail = err => ({
    type: ActionTypesTodo.GET.FAIL,
    payload: err
})

const getAllTodosSuccess = data => ({
    type: ActionTypesTodo.GET.SUCCESS,
    payload: data
})
