import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterByOneSelector } from '../../store/selectors'

import View from './view'
import { getCounterApiStart } from '../../store/actions-creators/counter'

export const Counter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCounterApiStart())
    }, [dispatch])

    const counterSelect = useSelector(getCounterByOneSelector)
    return (
        <View {...{ counterSelect }} />
    )
}
