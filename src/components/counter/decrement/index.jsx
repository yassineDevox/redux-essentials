import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementByOne } from '../../../store/actions-creators'

export const DecrementCounter = () => {
    const dispatch = useDispatch()
    const handleClickDecrement = () => {
        dispatch(decrementByOne())
    }

    return (
        <div>
            <button onClick={handleClickDecrement}>-</button>
        </div>
    )
}
