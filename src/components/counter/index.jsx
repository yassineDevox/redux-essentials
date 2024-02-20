import React from 'react'
import { useSelector } from 'react-redux'
import { getCounterByOneSelector } from '../../store/selectors'

export const Counter = () => {

    const counterValue = useSelector(getCounterByOneSelector)
    console.log(counterValue);
    return (
        <div style={{fontSize:"40px"}}>{counterValue}</div>
    )
}
