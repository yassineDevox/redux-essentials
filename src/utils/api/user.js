import { Api } from "./fetcher"

const ApiCall = {
    getAllUsers: () => Api.get('/users')
}

export default ApiCall