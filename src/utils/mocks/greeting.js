const ApiMock = {
    gretting: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data:{
                        label:{
                            fr:'Salut',
                            en:'Hi'
                        }
                    }
                })
            }, 3000)
        })
    }
}
export default ApiMock