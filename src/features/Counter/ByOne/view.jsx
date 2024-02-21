import React from 'react'
import styles from './style.module.css';
import Increment from './increment';
import Decrement from './decrement';

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