import ApiCall from "../../utils/api/auth";
import {
    ActionTypesAuth,
    ActionTypesCommon,

} from "../constants/actions-types";

export const login = (
    data,
    successCallBack,
    errorCallBack
) => ({
    type: ActionTypesCommon.API_CALL,
    subType: ActionTypesAuth.LOGIN,
    api: () => ApiCall.login(data),
    successCallBack,
    errorCallBack
})
