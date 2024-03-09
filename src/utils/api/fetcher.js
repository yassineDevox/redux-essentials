import axios from "axios";

// Set config defaults when creating the instance
const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/yassineDevox/counter-server/'
});

export const Api = {
    get: (endpoint) => axios.request({ url: endpoint, method: 'GET' }),
}