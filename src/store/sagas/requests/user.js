import { Api } from "../../../utils/api/fetcher"

export const getAllUsersRequest = () => {
    return Api.get('/users')
}