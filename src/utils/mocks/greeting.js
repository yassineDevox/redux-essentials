const DATA = {data:{
    label:{
        fr:'Salut',
        en:'Hi'
    }
}}
const ApiMock = {
    greeting: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(DATA)
            }, 3000)
        })
    }
}
export default ApiMock