import { Api } from "./fetcher"

const ApiCall = {
    login: (data) => Api.post('/login', data, {
        'Content-Type': 'application/json'
    })
}

export default ApiCall