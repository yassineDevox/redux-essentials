import React from 'react'
import Increment from './increment';
import Decrement from './decrement';
import styles from '../style.module.css';
import PropTypes from 'prop-types';

const View = ({ counterSelect }) => {
    const { loading, error, value } = counterSelect
    if (error) return <p>{JSON.stringify(error)}</p>
    if (loading) return <p>loading ...</p>
    return (
        <div className={styles.row}>
            <Increment {...{ styles }} />
            <span className={styles.value}>{value}</span>
            <Decrement {...{ styles }} />
        </div>
    )
}


View.propTypes = {
    counterSelect: PropTypes.object.isRequired
}

export default View