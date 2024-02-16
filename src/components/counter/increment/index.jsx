import React from 'react'
import { useDispatch } from 'react-redux'

export const IncrementCounter = () => {
    const dispatch = useDispatch()
    const handleClickIncrement = () => {
        dispatch({
            type: "increment"
        })
    }

    return (
        <div>
            <button onClick={handleClickIncrement}>+</button>
        </div>
    )
}
