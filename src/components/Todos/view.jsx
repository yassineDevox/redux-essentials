import React from 'react'
import PropTypes from "prop-types"
import { Loading } from '../../shared/components/Loader'
import { Error } from '../../shared/components/Error'

const View = ({ todosSelect }) => {
    const { loading, error, idle, data } = todosSelect
    if (loading || idle) return <Loading />
    if (error) return <Error />
    return (
        <div>{JSON.stringify(data)}</div>
    )
}

View.propTypes = {
    todosSelect: PropTypes.object.isRequired
}

export default View