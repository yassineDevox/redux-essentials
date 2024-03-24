import ApiCall from "../../utils/api/greeting";
import {
    ActionTypesCommon,
    ActionTypesGreeting,
} from "../constants/actions-types";

export const greeting = _ => ({
    type: ActionTypesCommon.API_CALL,
    subType: ActionTypesGreeting.GET,
    api: () => ApiCall.greeting(),
})