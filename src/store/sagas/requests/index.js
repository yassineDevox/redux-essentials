import axios from "axios";

export function requestGetCounter(){
    return axios.request({
        method:"GET",
        url:"https://my-json-server.typicode.com/yassineDevox/counter-server/counter"
    })
}