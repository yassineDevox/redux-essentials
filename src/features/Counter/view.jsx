import React from 'react'
import { CounterByOne } from './ByOne'
import { CounterByAmount } from './ByAmount'

const View = () => {
    return (
        <div>
            <CounterByOne />
            <CounterByAmount />
        </div>
    )
}

export default View
