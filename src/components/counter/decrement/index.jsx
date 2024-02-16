import React from 'react'
import { useDispatch } from 'react-redux'

export const DecrementCounter = () => {
    const dispatch = useDispatch()
    const handleClickDecrement = () => {
        dispatch({
            type: "decrement"
        })
    }

    return (
        <div>
            <button onClick={handleClickDecrement}>-</button>
        </div>
    )
}
