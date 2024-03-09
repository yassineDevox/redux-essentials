import { Api } from "../../../utils/api/fetcher"

export const getAllTodosRequest = () => {
    return Api.get('/todos')
}