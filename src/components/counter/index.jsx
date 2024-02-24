import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterByOneSelector } from '../../store/selectors'

import View from './view'
import { counterApi } from '../../utils/apis/counter'
import { intialize } from '../../store/actions-creators/counter'

export const Counter = () => {

    const dispatch = useDispatch()
    const [isPending, setPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {

        const f = async () => {
            try {
                setPending(true)
                const r = await counterApi.getValue()
                // add the res to the store counter   
                dispatch(intialize(r.data.value))
            } catch (error) {
                setError(error)
            } finally {
                setPending(false)
            }
        }
        f()
    }, [])

    const counterValueSelect = useSelector(getCounterByOneSelector)

    return (
        <View {...{ counterValueSelect, isPending, error }} />
    )
}
