import React from 'react'
import Increment from './increment';
import Decrement from './decrement';
import styles from '../style.module.css';
import { useSelector } from 'react-redux';
import { getCounterValueSelector } from '../slice';

const View = () => {
    const counterValue = useSelector(getCounterValueSelector)
    return (
        <div className={styles.row}>
            <Increment {...{ styles }} />
            <span className={styles.value}>{counterValue}</span>
            <Decrement {...{ styles }} />
        </div>
    )
}

export default View