import { ActionTypesUser } from "../constants/actions-types";

export const getAllUsersRequest = _ => ({
    type: ActionTypesUser.GET.START
})

export const getAllUsersFail = err => ({
    type: ActionTypesUser.GET.FAIL,
    payload: err
})

export const getAllUsersSuccess = data => ({
    type: ActionTypesUser.GET.SUCCESS,
    payload: data
})
