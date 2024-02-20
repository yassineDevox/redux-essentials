const apiMocks = {
    getValue: () => new Promise((resolve) => {
        return setTimeout(() => resolve({
            data:{value: 1}
        }), 3000)
    })
}

export default apiMocks