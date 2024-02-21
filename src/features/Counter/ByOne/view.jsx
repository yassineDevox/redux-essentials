import React from 'react'
import Increment from './increment';
import Decrement from './decrement';
import styles from '../style.module.css';

const View = () => {
    return (
        <div className={styles.row}>
            <Increment {...{ styles }} />
            <span className={styles.value}>{0}</span>
            <Decrement {...{ styles }} />
        </div>
    )
}

export default View