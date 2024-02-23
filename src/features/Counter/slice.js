import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        byOne: {
            value: 0,
            loading: false,
            error: null
        }
    },
    reducers: {
        incrementByOne: state => {
            state.byOne.value += 1
        },
        decrementByOne: state => {
            state.byOne.value -= 1
        },
        incrementByAmount: (state, { payload }) => {
            state.byOne.value += payload
        },
        incrementFromApiStart: state => {
            state.byOne.loading = true
        },
        incrementFromApiFail: (state, { payload }) => {
            state.byOne.loading = false
            state.byOne.error = payload
        },
        incrementFromApiSucces: (state, { payload }) => {
            state.byOne.value += payload
            state.byOne.error = null
            state.byOne.loading = false
        }
    }
})

export const getCounterValueSelector = state => state.counter.byOne

export const {
    incrementByOne,
    decrementByOne,
    incrementByAmount,
    incrementFromApiStart,
    incrementFromApiFail,
    incrementFromApiSucces } = counterSlice.actions

export default counterSlice.reducer