import React from 'react'

const Increment = ({styles}) => {
    return (
        <button
            className={styles.button}
            aria-label="Increment value"
        >
            +
        </button>
    )
}

export default Increment