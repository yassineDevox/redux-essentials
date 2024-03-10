import ApiCall from "../../utils/api/todo";
import {
    ActionTypesCommon,
    ActionTypesTodo
} from "../constants/actions-types";

export const getAllTodos = (filter) => ({
    type: ActionTypesCommon.API_CALL,
    subType: ActionTypesTodo.GET,
    api: () => ApiCall.getAllTodos(filter),
})