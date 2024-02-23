import React from 'react'
import View from './view'
import { useDispatch } from 'react-redux'
import { incrementFromApiFail, incrementFromApiStart, incrementFromApiSucces } from '../slice'

export const CounterByAmount = () => {
    const dispatch = useDispatch()


    const addCounterFromServer = () => {
        dispatch(incrementFromApiStart())
        fetch('https://my-json-server.typicode.com/yassineDevox/counter-server/counter')
            .then(res => {
                if (!res.ok) {
                    dispatch(incrementFromApiFail("Something went wrong 🚨"))
                }
                
                return res.json()
            })
            .then(data => dispatch(incrementFromApiSucces(data?.value)))
    }

    return (
        <View {...{ addCounterFromServer }} />
    )
}
