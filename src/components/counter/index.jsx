import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterByOneSelector } from '../../store/selectors'

import View from './view'
import { getCounterApiRequest } from '../../store/actions-creators/counter'

export const Counter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCounterApiRequest())
    }, [dispatch])

    const counterSelect = useSelector(getCounterByOneSelector)
    return (
        <View {...{ counterSelect }} />
    )
}
