import React from 'react'
import Increment from './increment';
import Decrement from './decrement';
import styles from '../style.module.css';
import PropTypes from 'prop-types';

const View = ({ counterValueSelect }) => {
    return (
        <div className={styles.row}>
            <Increment {...{ styles }} />
            <span className={styles.value}>{counterValueSelect}</span>
            <Decrement {...{ styles }} />
        </div>
    )
}


View.propTypes = {
    counterValueSelect: PropTypes.bool.isRequired
}

export default View