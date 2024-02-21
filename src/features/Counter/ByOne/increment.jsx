import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementByOne } from '../slice'
import PropTypes from 'prop-types'

const Increment = ({ styles }) => {

    const dispatch = useDispatch()
    const handleIncrement = () => dispatch(incrementByOne())

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

Increment.propsTypes = {
    styles: PropTypes.object.isRequired
}
export default Increment
