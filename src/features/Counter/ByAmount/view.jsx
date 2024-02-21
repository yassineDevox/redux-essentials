import React from 'react'
import styles from '../style.module.css';

const View = () => {
    return (
        <div className={styles.row}>
            <input
                className={styles.textbox}
                aria-label="Set increment amount"
            />
            <button
                className={styles.button}
            >
                Add Amount
            </button>
            <button
                className={styles.asyncButton}
            >
                Add Async
            </button>
        </div>
    )
}

export default View