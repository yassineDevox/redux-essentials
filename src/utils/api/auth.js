import { Api } from "./fetcher"

const ApiCall = {
    login: (data) => Api.post('http://localhost:3000/login', data, {
        'Content-Type': 'application/json'
    })
}

export default ApiCall