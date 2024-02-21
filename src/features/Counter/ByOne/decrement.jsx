import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementByOne } from '../slice'

const Decrement = ({ styles }) => {
    const dispatch = useDispatch()
    const handleDecrement = () => dispatch(decrementByOne())
    return (
        <button
            className={styles.button}
            aria-label="Decrement value"
            onClick={handleDecrement}
        >
            -
        </button>
    )
}

Decrement.propsTypes = {
    styles: PropTypes.object.isRequired
}

export default Decrement