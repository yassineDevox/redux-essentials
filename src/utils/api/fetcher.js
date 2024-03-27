import axios from "axios";

// Set config defaults when creating the instance
const myAxios = axios.create({
    baseURL: 'http://localhost:3001'
});

export const Api = {
    get: (endpoint) => myAxios.request({ url: endpoint, method: 'GET' }),
    post: (endpoint, data, headers) => myAxios.request({
        url: endpoint,
        method: 'POST',
        data,
        headers
    }),
}