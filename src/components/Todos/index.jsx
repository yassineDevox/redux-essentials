import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodos } from '../../store/actions-creators/todo'
import { getAllTodosSelector } from '../../store/selectors/todo'
import View  from './view'

export const Todos = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])
    const todosSelect = useSelector(getAllTodosSelector)
    return (
        <View {...{ todosSelect }} ></View>
    )
}

