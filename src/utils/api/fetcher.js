import axios from "axios";

// Set config defaults when creating the instance
const myAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const Api = {
    get: (endpoint) => myAxios.request({ url: endpoint, method: 'GET'}),
}