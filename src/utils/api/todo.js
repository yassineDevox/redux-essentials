import { Api } from "./fetcher"

const ApiCall = {
    getAllTodos: () => Api.get('/todos')
}

export default ApiCall