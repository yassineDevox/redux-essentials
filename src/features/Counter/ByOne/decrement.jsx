import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementByOne } from '../slice'
import PropTypes from 'prop-types';

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

Decrement.propTypes = {
    styles: PropTypes.object.isRequired
}

export default Decrement