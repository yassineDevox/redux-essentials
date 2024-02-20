import React from 'react'
import { useSelector } from 'react-redux'
import { getCounterByOneSelector } from '../../store/selectors'

import View from './view'

export const Counter = () => {

    const counterValueSelect = useSelector(getCounterByOneSelector)

    return (
        <View {...{counterValueSelect}}/>
    )
}
