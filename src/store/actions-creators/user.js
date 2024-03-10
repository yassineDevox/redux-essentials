import ApiCall from "../../utils/api/user";
import {
    ActionTypesCommon,
    ActionTypesUser
} from "../constants/actions-types";

export const getAllUsersRequest = (filter) => ({
    type: ActionTypesCommon.API_CALL,
    subType: ActionTypesUser.GET,
    api: () => ApiCall.getAllUsers(filter)
})
