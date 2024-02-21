import React from 'react'

const Decrement = ({ styles }) => {
    return (
        <button
            className={styles.button}
            aria-label="Decrement value"
        >
            -
        </button>
    )
}

export default Decrement