import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementByOne } from '../../../store/actions-creators'


export const IncrementCounter = () => {
    const dispatch = useDispatch()
    const handleClickIncrement = () => {
        dispatch(incrementByOne)
    }
    return (
        <div>
            <button onClick={handleClickIncrement}>+</button>
        </div>
    )
}
