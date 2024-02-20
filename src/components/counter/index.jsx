import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCounterByOneSelector } from '../../store/selectors'

import View from './view'
import { counterApi } from '../../utils/apis/counter'

export const Counter = () => {

    const counterValueSelect = useSelector(getCounterByOneSelector)
    const [api, setApi] = useState({})
    const [isPending, setPending] = useState(false)

    useEffect(() => {

        const f = async () => {
            try {
                setPending(true)
                const r = await counterApi.getValue()
                // console.log("res: ",r) 
                setApi(r)
            } catch (error) {
                console.log(error)
            } finally {
                setPending(false)
            }
        }
        f()
    }, [])

    return (
        <View {...{ counterValueSelect, isPending, api }} />
    )
}
