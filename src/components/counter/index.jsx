import React from 'react'
import { useSelector } from 'react-redux'
import { getCounterByOneSelector } from '../../store/selectors'

export const Counter = () => {

    const counterValue = useSelector(getCounterByOneSelector)
    return (
        <div style={{fontSize:"40px"}}>{counterValue}</div>
    )
}
