import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementByOne } from '../slice'

const Increment = ({styles}) => {
    
    const dispatch  = useDispatch()
    const handleIncrement = ()=> dispatch(incrementByOne())

    return (
        <button
            className={styles.button}
            aria-label="Increment value"
            onClick={handleIncrement}
        >
            +
        </button>
    )
}

export default Increment