import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import View  from './view'
import { getAllUsersSelector } from '../../store/selectors'
import { getAllUsersRequest } from '../../store/actions-creators/user'

export const Users = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllUsersRequest())
    }, [])
    const usersSelect = useSelector(getAllUsersSelector)
    return (
        <View {...{ usersSelect }} ></View>
    )
}

