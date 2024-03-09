import { Api } from "./fetcher";

const ApiCall = {
    getCounterValue: () => Api.get('/counter')
}

export default ApiCall