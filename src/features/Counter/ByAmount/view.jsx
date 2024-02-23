import React from 'react'
import styles from '../style.module.css';
import PropTypes from "prop-types"

const View = ({ addCounterFromServer }) => {


    return (
        <div className={styles.row}>
            <input
                className={styles.textbox}
                aria-label="Set increment amount"
            />
            <button
                className={styles.button}
            >
                Add From user Input
            </button>
            <button
                className={styles.asyncButton}
                onClick={addCounterFromServer}
            >
                Add From The Server
            </button>
        </div>
    )
}

View.propTypes = {
    addCounterFromServer: PropTypes.func.isRequired
}

export default View