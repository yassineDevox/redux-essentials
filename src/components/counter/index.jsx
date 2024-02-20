import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCounterByOneSelector } from '../../store/selectors'

import View from './view'
import { counterApi } from '../../utils/apis/counter'
import { intialize } from '../../store/actions-creators/counter'

export const Counter = () => {

    const counterValueSelect = useSelector(getCounterByOneSelector)
    const dispatch = useDispatch()
    const [isPending, setPending] = useState(false)

    useEffect(() => {

        const f = async () => {
            try {
                setPending(true)
                const r = await counterApi.getValue()
                // add the res to the store counter   
                dispatch(intialize(r.data.value))
            } catch (error) {
                console.log(error)
            } finally {
                setPending(false)
            }
        }
        f()
    }, [])

    return (
        <View {...{ counterValueSelect, isPending }} />
    )
}
