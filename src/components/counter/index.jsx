import React from 'react'
import { useSelector } from 'react-redux'

export const Counter = () => {

    const counterValue = useSelector(state => state.counter.value)
    return (
        <div style={{fontSize:"40px"}}>{counterValue}</div>
    )
}
